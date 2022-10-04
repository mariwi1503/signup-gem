# Application Name: signup-gem

## Installation
```bash
$ cd signup-gem
$ npm install
```

## Running the app

```bash
# development
$ nodemon

# production mode
$ npm run start
```
```
# API List

| Routes | EndPoint                            | Description                                            |
| ------ | ----------------------------------- | ------------------------------------------------------ |
| POST   | /auth/signup                        | api for user signup                                    |
| POST   | /auth/login                         | api for login                                          |

```
POST /auth/signup
req.body:
    - name:
        • contains at least 3 character and it's required
    - email:
        • contains an email with email format validatated and it's required
    - password:
        • contains at least one lower character
        • contains at least one upper character
        • contains at least one digit character
        • contains at least one special character
        • contains at least 8 characters
```

```
POST /auth/signup
req.body:
    - email:
        • contains an email with email format validatated and it's required
    - password:
        • contains at least 8 characters
```