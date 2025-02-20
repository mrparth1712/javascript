function telecomService() {
    const languageChoice = parseInt(prompt("Press 1 for English\nPress 2 for Hindi\nPress 3 for Gujarati\nEnter your choice:"));
  
    switch (languageChoice) {
      case 1:
        const englishOption = parseInt(
          prompt(
            "Press 1 for Internet Recharge\nPress 2 for Top-up Recharge\nPress 3 for Special Recharge\nEnter your choice:"
          )
        );
       switch(englishOption){
            case 1:
              console.log("data")
                alert("You have successfully done an Internet Recharge.");
                break;
              case 2:
                alert("You have successfully done a Top-up Recharge.");
                break;
              case 3:
                alert("You have successfully done a Special Recharge.");
                break;
              default:
                alert("Invalid option selected in English menu.");
            }
            break;
       }
       const hindiOption = parseInt(
        prompt(
          "Press 1 for Internet Recharge\nPress 2 for Top-up Recharge\nPress 3 for Special Recharge\nEnter your choice:"
        )
      );
      switch (hindiOption) {
        case 1:
          alert("आपने सफलतापूर्वक इंटरनेट रिचार्ज कर लिया है।");
          break;
        case 2:
          alert("आपने सफलतापूर्वक टॉप-अप रिचार्ज कर लिया है।");
          break;
        case 3:
          alert("आपने सफलतापूर्वक विशेष रिचार्ज कर लिया है।");
          break;
        default:
          alert("हिंदी मेनू में चयनित विकल्प अमान्य है।");
          break;
      }
    
    }