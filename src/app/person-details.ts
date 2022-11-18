export interface PersonDetails  {

        adult:                boolean;
        id:                   number;
        name:                 string;
        original_name:        string;
        popularity:           number;
        gender:               number;
        known_for_department: string;
        profile_path:         null | string;
        known_for:            any[];   
}
