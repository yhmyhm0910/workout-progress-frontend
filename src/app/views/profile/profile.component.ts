import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environment/environment';
import { GlobalsService } from '../../globals.service';

@Component({
  templateUrl: 'profile.component.html',
  standalone: true,
})

export class ProfileComponent implements OnInit {

  readonly backend_apiUrl: string = environment.backend_apiUrl;
  email: string = "";
  name: string = "";
  gender: string = "";

  constructor(
    private httpClient: HttpClient,
    private globalsService: GlobalsService,
  ) {
    this.globalsService.userId$.subscribe(async (userId) => {
      const fetchUserFromDB = async (userid: string): Promise<any> => {
        const params = {
          userid, // Define or fetch your access token here
        };

        try {
          const response = await lastValueFrom(
            this.httpClient.post(`${this.backend_apiUrl}/api/Database/SelectUserByUserID`, params, { withCredentials: true })
          );
          // console.log(response);
          // console.log((response as any).result);
          return (response as any).result; // Extract the result from the response
        } catch (error) {
          console.error('Error fetching standards: ', error);
          throw error; // Re-throw the error for the caller to handle
        }
      };
      if (userId) {
        console.log(`User ID updated: ${userId}`);
        const userDetails = await fetchUserFromDB(userId);
        this.email = userDetails[0].email;
        this.gender = userDetails[0].gender;
        this.name = userDetails[0].name;
        console.log(userDetails[0]);
      }
    });
  }

  ngOnInit(): void {
  };

};
