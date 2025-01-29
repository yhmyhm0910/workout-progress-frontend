import { DOCUMENT, NgStyle, CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { FormControl, FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartOptions, ChartData, plugins } from 'chart.js';
import { lastValueFrom } from 'rxjs';
import {
  AlertComponent,
  AvatarComponent,
  ButtonCloseDirective,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  RowComponent,
  TableDirective,
  TextColorDirective,
  FormFloatingDirective,
  FormSelectDirective
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilTrash } from '@coreui/icons';

// import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
// import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
//import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { exercises_name_by_body_part } from './dashboard-exercisesName.data'

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environment/environment';
import { GlobalsService } from '../../globals.service';

import { existing_exercise_details } from './interfaces/existing_exercise_details';
import { corr_standards_dict } from './interfaces/corr_standards_dict';

type existing_records = {
  created_at: string;
  date_of_exercise: string;
  exercise_name: string;
  experience_month: number;
  one_rep_max: number;
  recordid: number;
  unit: string;
  userid: string;
  body_weight: number;
};

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, CardHeaderComponent, TableDirective, AvatarComponent, FormDirective, FormLabelDirective, FormControlDirective,   FormCheckComponent, FormCheckInputDirective, FormsModule, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ModalBodyComponent, ModalFooterComponent, ModalToggleDirective, ButtonCloseDirective, NgbModule, AlertComponent, FormFloatingDirective, FormSelectDirective, IconModule],
  providers: [
    IconSetService
  ]
})

export class DashboardComponent implements OnInit {

  readonly exercises_name_by_body_part: string[][] = exercises_name_by_body_part;
  readonly backend_apiUrl: string = environment.backend_apiUrl;
  isClicked = false;
  addExercisesClicked = false;
  deleteRecordClicked = false;
  today = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
  alertCount = 1;
  cardCount = 1; // Track the number of cards
  selectedBodyPart: string | null = null;
  alertVisible: boolean[] = [];
  alertType: string[] = []; // insert | delete
  alertDismissible: boolean[] = [];
  exerciseModified: string[] = [];
  oneRepMaxModified: number[] = [];
  selectedInputtingExerciseName = "";
  selectedExperience_year: number = 0;
  selectedExperience_month: number = 0;
  inputtedOneRepMax: string | null = null;
  inputtedBodyWeight: string | null = null;
  isValidOneRepMax = true;
  isValidBodyWeight = true;
  existing_records_dict: { [key: string]: existing_exercise_details[] } = {};
  corr_standards_dict: { [key: string]: corr_standards_dict[] } = {};
  all_presenting_records_dict: { [key: string]: ChartData } = {};
  searched_presenting_records_dict: { [key: string]: ChartData } = {};
  months_experienced = [...Array(140).keys()];
  existing_records_dict_desc_creating_time: any;
  searchString = "";
  options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months Experienced' // Label for the x-axis
        }
      },
      y: {
        title: {
          display: true,
          text: 'Pound', // Label for the y-axis
        },
        beginAtZero: true
      }
    },
    maintainAspectRatio: false
  };

  constructor(
    private httpClient: HttpClient,
    private globalsService: GlobalsService,
    public iconSet: IconSetService
  ) {
      iconSet.icons = { cilTrash };
      this.globalsService.userId$.subscribe(async (userId) => {
      if (userId) {
        console.log(`User ID updated: ${userId}`);
        await this.fetchExistingRecords(userId);
        this.fetchStandards(this.globalsService.access_token);
      }
    });
  }

  ngOnInit(): void {
  };

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  convertToUserTime(utcString: string, isCreatingTime: boolean): string {
    const utcDate = new Date(utcString);

    if (isCreatingTime) {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        // timeZoneName: "short", // Optional, to show timezone abbreviation
      };
      return utcDate.toLocaleString("en-US", options);

    } else {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      return utcDate.toLocaleString("en-US", options);

    }

  }

  async deleteRecord(details: any): Promise<void> {
    console.log('Exercise Name:', details.exercise_name);
    console.log('Created At:', details.created_at);
    console.log('RecordID: ', details.recordId);
    const deleteRecordInDB = async (access_token: string, recordid: number): Promise<any>  => {

      const params = {
        access_token,
        recordid
      };

      try {
        const response = await lastValueFrom(
          this.httpClient.post(`${this.backend_apiUrl}/api/Database/DeleteRecord`, params, { withCredentials: true }
          )
        );
        console.log(response);
        // console.log((response as any).result);
        return (response as any).result; // Extract the result from the response
      } catch (error) {
        console.error('Error deleting record: ', error);
        throw error; // Re-throw the error for the caller to handle
      }
    };
    const access_token = this.globalsService.access_token;
    await deleteRecordInDB(access_token, details.recordId);

    this.alertCount++;
    this.alertVisible.push(true);
    this.alertDismissible.push(true);
    this.exerciseModified.push(details.exercise_name);
    this.oneRepMaxModified.push(details.one_rep_max);
    this.alertType.push("delete");

    if (this.globalsService.userId) {
      console.log(`User ID updated: ${this.globalsService.userId}`);
      await this.fetchExistingRecords(this.globalsService.userId);
      await this.fetchStandards(this.globalsService.access_token);
    }
  }

  validOneRepMaxInput() {
    if (this.inputtedOneRepMax === null || /^\d*\.?\d+$/.test(this.inputtedOneRepMax)) { // if it is a +ve num or init
      this.isValidOneRepMax = true;
    } else {
      this.isValidOneRepMax = false;
      console.log(this.inputtedOneRepMax);
    }
  };

  validBodyWeightInput() {
    if (this.inputtedBodyWeight === null || /^\d*\.?\d+$/.test(this.inputtedBodyWeight)) { // if it is a +ve num or init
      this.isValidBodyWeight = true;
    } else {
      this.isValidBodyWeight = false;
      console.log(this.inputtedBodyWeight);
    }
  };

  searchBarChange(sub_string: string) {
    this.searched_presenting_records_dict = {};
    for (const [key, value] of Object.entries(this.all_presenting_records_dict).sort((a, b) => a[0].localeCompare(b[0]))) {
      if (key.includes(sub_string)) {
        this.searched_presenting_records_dict[key] = value;
      };
    };
  };

  addExerciseButton() {
    if (this.deleteRecordClicked === true) {
      this.deleteRecordClicked = !this.deleteRecordClicked;
    };
    this.addExercisesClicked = !this.addExercisesClicked;
  }

  deleteRecordButton() {
    if (this.addExercisesClicked === true) {
      this.addExercisesClicked = !this.addExercisesClicked;
    }
    this.deleteRecordClicked = !this.deleteRecordClicked;
    // console.log(this.existing_records_dict);
  };

  changeInputtingExercise(exercise: string) {
    this.selectedInputtingExerciseName = exercise;
  }

  async addRecordButton() {
    const experience_month = Number(this.selectedExperience_year) * 12 + Number(this.selectedExperience_month);
    const params = {
      userId: this.globalsService.userId,
      exerciseName: this.selectedInputtingExerciseName,
      oneRepMax: Number(this.inputtedOneRepMax),
      bodyWeight: Number(this.inputtedBodyWeight),
      experience_month: experience_month,
      unit: "lbs"
    };

    try {
      const res: any = await this.httpClient.post(`${this.backend_apiUrl}/api/Database/InsertRecord`, params).toPromise();
      // console.log(res); // Handle the response

      this.alertCount++;
      this.alertVisible.push(true);
      this.alertDismissible.push(true);
      this.exerciseModified.push(res.exerciseName);
      this.oneRepMaxModified.push(res.oneRepMax);
      this.alertType.push("insert");

      if (this.globalsService.userId) {
        console.log(`User ID updated: ${this.globalsService.userId}`);
        await this.fetchExistingRecords(this.globalsService.userId);
        await this.fetchStandards(this.globalsService.access_token);
      }
    } catch (error) {
      console.error('Error inserting record: ', error); // Handle errors
    }
  }

  async fetchStandards (access_token: string) {
    const fetchFromDB = async (exercise_name: string): Promise<any> => {
      const params = {
        access_token, // Define or fetch your access token here
      };

      try {
        const response = await lastValueFrom(
          this.httpClient.post(`${this.backend_apiUrl}/api/Database/SelectStandardByName?exercise_name=${exercise_name}`, params, { withCredentials: true })
        );
        // console.log(response);
        // console.log((response as any).result);
        return (response as any).result; // Extract the result from the response
      } catch (error) {
        console.error('Error fetching standards: ', error);
        throw error; // Re-throw the error for the caller to handle
      }
    };
    const determineLevel = (experience_month: number): string[] => {
      if (experience_month < 6) {
        return ["Beginner", "Novice"]
      } else if (experience_month < 24) {
        return ["Novice", "Intermediate"]
      } else if (experience_month < 60) {
        return ["Intermediate", "Elite"]
      } else if (experience_month >= 60) {
        return ["Elite"]
      } else {
        console.log("Error in determining level.")
        return ["Error in determining level."]
      };
    };
    const selectCorrUpperAndLowerLevelFromStandard = (experience_level: string[], standards_full: any): any => {
      const returnOMRStandard = [];
      for (let i=0; i<standards_full.length; i++) {
        for (let j=0; j<experience_level.length; j++) {
          if (standards_full[i].level == experience_level[j]) {
            returnOMRStandard.push(standards_full[i]);
          };
        };
      };
      return returnOMRStandard;
    };

    const selectCorrBodyWeightRange = (body_weight: number): number[] => {
      if (body_weight%10 == 0) {
        return [body_weight];
      } else {
        const body_weight_floor = Math.floor(body_weight / 10) * 10;
        const body_weight_ceil = Math.ceil(body_weight / 10) * 10;
        return [body_weight_floor, body_weight_ceil];
      };
    };
    const selectExactLevelFromStandard = (standards_corr_level_range: any, corr_bodyweight_range: number[], exact_bodyweight: number, experience_month: number): number => {
      const ORM_mix_level = (lower_standard: number, higher_standard: number, experience_month: number) => {
        if (experience_month == 0) {
          return lower_standard;
        } else if (experience_month <= 6) {
          return ((higher_standard-lower_standard)*((experience_month-1)/5)+lower_standard);
        } else if (experience_month <= 24) {
          return ((higher_standard-lower_standard)*((experience_month-6)/(24-6))+lower_standard);
        } else if (experience_month <= 60) {
          return ((higher_standard-lower_standard)*((experience_month-24)/(60-24))+lower_standard);
        };
        return 0;
      };
      const ORM_mix_bodyweight = (higher_bodyweight: number, lower_bodyweight: number, bodyweight: number) => {
          return ((higher_bodyweight-lower_bodyweight)*((bodyweight%10)/10) + lower_bodyweight);
      };
      if (standards_corr_level_range.length > 1) {  // All level except elite
        let lower_bodyweight_lower_level_OMR: number = Number(standards_corr_level_range[0][corr_bodyweight_range[0].toString()]);
        let lower_bodyweight_higher_level_OMR: number = Number(standards_corr_level_range[1][corr_bodyweight_range[0].toString()]);
        // console.log(lower_bodyweight_lower_level_OMR);
        // console.log(lower_bodyweight_higher_level_OMR);
        // console.log(experience_month);
        // console.log(exact_bodyweight);
        if (!lower_bodyweight_lower_level_OMR) {  // cases for e.g.: <1, where "<" cannot be Number()
          lower_bodyweight_lower_level_OMR = 0
        };
        if (!lower_bodyweight_higher_level_OMR) { // cases for e.g.: <1, where "<" cannot be Number()
          lower_bodyweight_higher_level_OMR = 0
        }
        const exactLevel_lower_bodyweight = ORM_mix_level(lower_bodyweight_lower_level_OMR, lower_bodyweight_higher_level_OMR, experience_month);
        // console.log(exactLevel_lower_bodyweight);
        if (corr_bodyweight_range.length > 1) { // bodyweight divisible by 10 have length==1
          let higher_bodyweight_lower_level_OMR: number = Number(standards_corr_level_range[0][corr_bodyweight_range[1].toString()]);
          let higher_bodyweight_higher_level_OMR: number = Number(standards_corr_level_range[1][corr_bodyweight_range[1].toString()]);
          if (!higher_bodyweight_lower_level_OMR) { // cases for e.g.: <1, where "<" cannot be Number()
            higher_bodyweight_lower_level_OMR = 0
          };
          if (!higher_bodyweight_higher_level_OMR) {  // cases for e.g.: <1, where "<" cannot be Number()
            higher_bodyweight_higher_level_OMR = 0
          };
          // console.log(higher_bodyweight_lower_level_OMR);
          // console.log(higher_bodyweight_higher_level_OMR);
          // console.log(experience_month);
          const exactLevel_higher_bodyweight = ORM_mix_level(higher_bodyweight_lower_level_OMR, higher_bodyweight_higher_level_OMR, experience_month);
          // console.log(exactLevel_higher_bodyweight);

          if (exactLevel_higher_bodyweight && exactLevel_lower_bodyweight) {
            const exact_level_exact_bodyweight = ORM_mix_bodyweight(exactLevel_higher_bodyweight, exactLevel_lower_bodyweight, exact_bodyweight);
            return exact_level_exact_bodyweight;  // case 1: bodyweight NOT divisible by 10, not elite
          }
        } else {  // bodyweight divisible by 10
          return exactLevel_lower_bodyweight; // case 2: bodyweight divisible by 10, not elite
        }
      } else {
        if (corr_bodyweight_range.length > 1) { // bodyweight NOT divisible by 10
          const lower_bodyweight_OMR: number = Number(standards_corr_level_range[0][corr_bodyweight_range[0].toString()]);
          const higher_bodyweight_OMR: number = Number(standards_corr_level_range[0][corr_bodyweight_range[1].toString()]);
          console.log(`lower_bodyweight_OMR: ${lower_bodyweight_OMR}`);
          console.log(`higher_bodyweight_OMR: ${higher_bodyweight_OMR}`);
          const exactLevel_higher_bodyweight = ORM_mix_bodyweight(higher_bodyweight_OMR, lower_bodyweight_OMR, exact_bodyweight);
          return exactLevel_higher_bodyweight;  // case 3: bodyweight NOT divisible by 10, Elite
        } else { // bodyweight divisible by 10
          const OMR: number = Number(standards_corr_level_range[0][corr_bodyweight_range[0].toString()]);
          return OMR; // case 4: bodyweight divisible by 10, Elite
        }
      }
      return -1;
    };
    const insertStandardToDict = (name: string, experience_month: number, body_weight: number, standard: number): void => {
      if (!this.corr_standards_dict[name]) {
        this.corr_standards_dict[name] = []
      }
      this.corr_standards_dict[name].push({
        experience_month: experience_month,
        body_weight: body_weight,
        orm_standard: standard
      });
    };
    const pushStandardToExistingRecord_chart = () => {
      const updated_dict: { [key: string]: ChartData } = {};
      for (const [name, chart_details] of Object.entries(this.all_presenting_records_dict).sort((a, b) => a[0].localeCompare(b[0]))){
        const data = [];
        // console.log(name);
        // console.log(this.corr_standards_dict[name]);
        for (let i=0; i<this.corr_standards_dict[name].length; i++) {
          data.push({
            x: this.corr_standards_dict[name][i].experience_month,
            y: this.corr_standards_dict[name][i].orm_standard
          });
        };
        const standard_to_add = {
          label: 'Standard',
          backgroundColor: 'rgba(252, 113, 104, 0.2)',
          borderColor: 'rgba(252, 113, 104, 1)',
          pointBackgroundColor: 'rgba(252, 113, 104, 1)',
          pointBorderColor: '#fff',
          pointRadius: 8,
          pointHoverRadius: 12,
          data: data
        };
        chart_details.datasets = [...chart_details.datasets, standard_to_add]
        //chart_details.datasets.push(standard_to_add);
        updated_dict[name] = chart_details
      };
      this.all_presenting_records_dict = JSON.parse(JSON.stringify(updated_dict));  // deep clone required to update the chart
    };
    this.corr_standards_dict = {};
    for (const [existing_exercise_name, existing_exercise_details] of Object.entries(this.existing_records_dict).sort((a, b) => a[0].localeCompare(b[0]))) { // alphabetical order
      // console.log(existing_exercise_name);
      const standards_full = await fetchFromDB(existing_exercise_name);
      // console.log(standards_full)
      for (let i=0; i<existing_exercise_details.length; i++) {
        // console.log(`Body weight: ${existing_exercise_details[i].body_weight}`);
        // console.log(`Months experienced: ${existing_exercise_details[i].experience_month}`);
        const experience_level: string[] = determineLevel(existing_exercise_details[i].experience_month);
        const standards_corr_level_range = selectCorrUpperAndLowerLevelFromStandard(experience_level, standards_full);
        const corr_bodyweight_range = selectCorrBodyWeightRange(existing_exercise_details[i].body_weight);
        // console.log(standards_corr_level_range);
        // console.log(corr_bodyweight_range);
        const standards_corr_level_exact = selectExactLevelFromStandard(standards_corr_level_range, corr_bodyweight_range, existing_exercise_details[i].body_weight, existing_exercise_details[i].experience_month);
        // console.log(`Standard OMR for ${existing_exercise_name}:\nRecorded OMR: ${existing_exercise_details[i].one_rep_max}\nBodyweight = ${existing_exercise_details[i].body_weight}\nMonths experienced= ${existing_exercise_details[i].experience_month} (${experience_level})\nUpper-lower bound=${standards_corr_level_range}\nExact OMR: ${standards_corr_level_exact}`);

        insertStandardToDict(existing_exercise_name, existing_exercise_details[i].experience_month, existing_exercise_details[i].body_weight, standards_corr_level_exact);
        // console.log(this.existing_records_dict);
        // console.log(this.corr_standards_dict);

      };
    };
    pushStandardToExistingRecord_chart();
    console.log('Standards: ')
    console.log(this.all_presenting_records_dict);
    this.searched_presenting_records_dict = {...this.all_presenting_records_dict};
    this.existing_records_dict_desc_creating_time = Object.entries(this.existing_records_dict)
      .flatMap(([key, values]) =>
        values.map(item => ({
          ...item, // Include the original item properties
          exercise_name: key // Add the key as a new property
        }))
      )
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); // Sort in descending order

  }

  async fetchExistingRecords(userId: string) {
    const params = {
      userId: userId
    };
    try {
      const res: any = await lastValueFrom(
        this.httpClient.post(`${this.backend_apiUrl}/api/Database/SelectRecordByUserID`, params)
      );
      // console.log(res); // Handle the response
      const existing_records: existing_records[] | null = [...res.result];
      this.existing_records_dict = {};
      if (existing_records != null) {
        for (let i=0; i<existing_records.length; i++) {
          if (existing_records[i].exercise_name in this.existing_records_dict) {  // exercise_name already exist

          } else {
            this.existing_records_dict[existing_records[i].exercise_name] = [];
          }
          this.existing_records_dict[existing_records[i].exercise_name].push({
            experience_month: existing_records[i].experience_month,
            body_weight: existing_records[i].body_weight,
            one_rep_max: existing_records[i].one_rep_max,
            created_at: existing_records[i].created_at,
            date_of_exercise: existing_records[i].date_of_exercise,
            recordId: existing_records[i].recordid
          });
        }
        console.log('Existing Records:')
        console.log(this.existing_records_dict);
        const existing_records_to_chart = () => {
          this.all_presenting_records_dict = {};
          for (const [key, value] of Object.entries(this.existing_records_dict).sort((a, b) => a[0].localeCompare(b[0]))) { // alphabetical order
            // console.log(key);
            // console.log(value);
            const data = [];
            for (let i=0; i<value.length; i++) {
              data.push({ // x = month experienced, y = ORM
                x: value[i].experience_month,
                y: value[i].one_rep_max
              });
            };
            const val_len = value.length - 1;
            function extendedRange(x: number, y: number): number[] {
              if (y === 0) {x++};
              return Array.from({ length: (y - x + 1) + 2 }, (_, i) => x - 1 + i);
            }
            const labels_range = extendedRange(value[0].experience_month, value[val_len].experience_month)
            // console.log(`data: x=${data[0].x}, y=${data[0].y}`);
            const pushingChartLineData = {
              labels: labels_range,
              datasets: [
                {
                  label: 'Record',
                  backgroundColor: 'rgba(104, 252, 195, 0.2)',
                  borderColor: 'rgba(104, 252, 195, 1)',
                  pointBackgroundColor: 'rgba(104, 252, 195, 1)',
                  pointBorderColor: '#fff',
                  pointRadius: 6,
                  pointHoverRadius: 12,
                  data: data
                }
              ]
            };
            this.all_presenting_records_dict[key] = pushingChartLineData;
          };
        };
        existing_records_to_chart();
      };
    } catch (error) {
      console.error('Error fetching existing record: ', error); // Handle errors
    };
  };

  // Function to select only one checkbox at a time
  selectOnly(bodyPart: string) {
    // console.log("this.selectedBodyPart: " + this.selectedBodyPart);
    // console.log("bodyPart: " + bodyPart);
    // If the clicked body part is already selected, deselect it
    if (this.selectedBodyPart === bodyPart) {
      this.selectedBodyPart = null; // uncheck when clicked again
    } else {
      this.selectedBodyPart = bodyPart;
    }
  }
};
