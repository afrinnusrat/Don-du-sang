import React from "react";
import BirthPicker from "./steps/birthPicker";
import PersInfo from "./steps/persInfo";

function SignUp({ navigation }) {
    const [firstStep, setFirstStep] = React.useState(true);
    const [securityQuestions,setSecurityQuestions]=React.useState({
        question1:"Quel est votre chanteur préféré ?",response1:"",
        question2:"",response2:"",
        question3:"",response3:""
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
    const onChangeQuestion=(text)=>setSecurityQuestions({...securityQuestions,question1:text});
    const onChangeResponse=(text)=>setSecurityQuestions({...securityQuestions,response1:text});
    if (firstStep) {
        return (
            <PersInfo navigation={navigation} user={user} action={() => setFirstStep(false)} onChangeFName={onChangeFName} onChangeLName={onChangeLName} onChangePassword={onChangePassword} onChangePhoneNumber={onChangePhoneNumber} onChangeGender={onChangeGender} onChangeBloodGroup={onChangeBloodGroup} />
        );
    } else {
        return <BirthPicker navigation={navigation} birthDate={user.birthDate} onChangeBirthDate={onChangeBirthDate} securityQuestions={securityQuestions} onChangeQuestion={onChangeQuestion} onChangeResponse={onChangeResponse} />
    }

}

export default SignUp;
