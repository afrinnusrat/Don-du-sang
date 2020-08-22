import React from "react";
import { View } from "react-native";
import BirthPicker from "./steps/BirthPicker";
import PersInfo from "./steps/PersInfo";

function SignUp({ navigation }) {
    const [firstStep, setFirstStep] = React.useState(true);
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

    if (firstStep) {
        return (
            <PersInfo navigation={navigation} user={user} action={() => setFirstStep(false)} onChangeFName={onChangeFName} onChangeLName={onChangeLName} onChangePassword={onChangePassword} onChangePhoneNumber={onChangePhoneNumber} onChangeGender={onChangeGender} onChangeBloodGroup={onChangeBloodGroup} />
        );
    } else {
        return <BirthPicker birthDate={user.birthDate} onChangeBirthDate={onChangeBirthDate} />
    }

}

export default SignUp;
