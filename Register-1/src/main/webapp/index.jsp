
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Form</title>
</head>
<body>
    <div class="container">
        <form action="register" id="form">
        <h2>Registration</h2>
        <div class="form-input">
            <label for="username">User Name</label>
            <input type="text" id="username" name="username">
            <div class="error">
      
            </div>
        </div>
        <div class="form-input">
            <label for="mail">Mail I'd</label>
            <input type="text" id="mail" name="mail">
            <div class="error">
            </div>
        </div>
        <div class="form-input">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
            <div class="error">
               
            </div>
        </div>
        <div class="form-input">
        <label for="cpassword">Confirm Password</label>
        <input type="password" name="cpassword" id="cpassword">
        <div class="error">
               
        </div>
    </div>
        <div class="btn">
            <button type="submit" id="btn">Submit</button>
        </div>
    </form>
    </div>
</body>
<script src="form.js"></script>
</html>