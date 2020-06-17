<?php

    if(isset($_POST['send'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = "thecodefire.arul@gmail.com";

        $subject = "Form Submission";

        $msg = "Name: ".$name."\n"."Email Address: "."\n".$email."\n"."Wrote the Following: "."\n\n".$message;

        $header = "From: ".$email;

        if(mail($to, $subject, $msg, $headers)){
            echo "<script>alert('Hey '.$name.', Yoru Message have been send successfully. We will contact you shortly')</script>";

            echo "<script>window.open('contact.html', '_self');</script>";
        }

        else{
            echo "Something Went Wrong!";
        }
    }

?>