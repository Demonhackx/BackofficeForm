# BackofficeForm

This project was generated with Angular v.15.2.4.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## PURPOSE
Enable the creation of a professional to manage requests.

## DEFINITION OF DONE
Back button, First and Last Name, Professional Title.

## PROFESSIONAL TITLE
Therapist (mandatory if supervisor is null)
Supervisor (mandatory if therapist is null)

## PERSONAL DETAILS
First Name, Last Name, Tax Code, Place of Birth (all mandatory)

## RESIDENCE
Address, City, Province, ZIP Code, Region (all mandatory)

## CONTACTS
Phone, Email (both mandatory)

## EDUCATION
Education Level, Institute/University, Period, Field of Study

## PROFESSIONAL EXPERIENCES
Company, Position/Role, Period, Sector

## ADDITIONAL FUNCTIONALITIES
Validate mandatory parameters, display error messages, and change label colors if needed.
Successful validation allows creation through "Save" button, showing a success message and navigating to the new therapist's details.
Allow cancellation with a confirmation modal, returning to the therapist list.
Each procedure is subject to permissions.
