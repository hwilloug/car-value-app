# car-value-app

A used car pricing API
Written following Udemy's NextJS: The Complete Developer's Guide

## Functionality

In this app:
    - Users sign up with email/password
    - Users get an estimate for how much their car is worth based on the make/model/year/mileage
    - Users can report what they sold their vehicles for
    - Admins have to approve reported sales

### Routes
| Method and Route  | Body or Query String | Description |
| ------------------ | -------------------- | ----------- |
| POST /auth/signup  | Body - `{ email, password} ` | Create a new user and sign in |
| POST /auth/signin  | Body - `{ email, password }` | Sign in as an existing user |
| GET /reports       | QS - make, model, year, mileage, longitude, latitude  | Get an estimate for the car's value |
| POST /reports      | Body - `{ make, model, year, mileage, longitude, latitude, price }` | Report how much a vehicle sold for |
| PATCH /reports/:id | Body - `{ approved }` | Approve or reject a report submitted by a user |