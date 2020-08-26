import React from "react";
import BirthPicker from "./steps/birthPicker";
import PersInfo from "./steps/persInfo";
import SecurityQuestions from "./steps/securityQuestions";

export default function SignUp({ navigation }) {
    const [steps, setSteps] = React.useState({
        step1: true, step2: false, step3: false
    })
    const [securityQuestions, setSecurityQuestions] = React.useState({
        question1: "Quel est votre chanteur préféré ?", response1: "",
        question2: "", response2: "",
        question3: "", response3: ""
    })
    const [user, setUser] = React.useState({
        firstName: "", lastName: "", password: "", birthDate: new Date(), phoneNumber: "", gender: "Homme", bloodGroup: "O+"
    });

    const onChangeFName = (text) => setUser({ ...user, firstName: text });
    const onChangeLName = (text) => setUser({ ...user, lastName: text });
    const onChangePassword = (text) => setUser({ ...user, password: text });
    const onChangeBirthDate = (text) => setUser({ ...user, birthDate: text });
    const onChangePhoneNumber = (text) => setUser({ ...user, phoneNumber: text });
    const onChangeGender = (text) => setUser({ ...user, gender: text });
    const onChangeBloodGroup = (text) => setUser({ ...user, bloodGroup: text });
    //const onChangeQuestion = (text) => setSecurityQuestions({ ...securityQuestions, question1: text });
    //const onChangeResponse = (text) => setSecurityQuestions({ ...securityQuestions, response1: text });
    // 
    const onChangeQuestions = (text, nb) => {
        setSecurityQuestions({ ...securityQuestions, ["question" + nb]: text });
    }
    const onChangeResponses = (text, nb) => {
        setSecurityQuestions({ ...securityQuestions, ["response" + nb]: text });
    }
    //
    const addUser = () => {
        const date1 = new Date('7/13/2010');
        const date2 = new Date('12/15/2010');
        const diffTime = Math.abs(date2 - date1);
        const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if((diffYears<=60) && (diffYears>=18)){
            alert("fname : " + user.firstName + "\nlname : " + user.lastName + "\nbirthDay : " + user.birthDate)
        }else{
            alert("Votre age ne vous permet pas de donner du sang");
        }
        //navigation.navigate("DashboardScreen");
    }
    if (steps.step1) {
        return (
            <PersInfo navigation={navigation} user={user} action={() => setSteps({ ...steps, step1: false, step2: true })} onChangeFName={onChangeFName} onChangeLName={onChangeLName} onChangePassword={onChangePassword} onChangePhoneNumber={onChangePhoneNumber} onChangeGender={onChangeGender} onChangeBloodGroup={onChangeBloodGroup} />
        );
    } else if (steps.step2) {
        return <BirthPicker navigation={navigation} birthDate={user.birthDate} action={() => setSteps({ ...steps, step2: false, step3: true })} onChangeBirthDate={onChangeBirthDate} />
    } else {
        return <SecurityQuestions navigation={navigation} onChangeQuestion={onChangeQuestions} onChangeResponse={onChangeResponses} securityQuestions={securityQuestions} action={addUser} />
    }

}

