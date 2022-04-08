/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Platform,
  StyleSheet,
} from 'react-native';
import realm, {getAllUsers, addUser} from '../../Database';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EmployeeFirstName = props => {
  return (
    <View style={styles.TextInputView}>
      <TextInput
        style={{height: 50, marginLeft: 5, marginRight: 5}}
        placeholder="Employee First Name"
        value={props.value}
        onChangeText={props.onChange}
        autoFocus={false}
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={props.onSubmit}
        blurOnSubmit={false}
      />
    </View>
  );
};

const EmployeeLastName = props => {
  return (
    <View style={styles.TextInputView}>
      <TextInput
        style={{height: 50, marginLeft: 5, marginRight: 5}}
        placeholder="Employee Last Name"
        value={props.value}
        onChangeText={props.onChange}
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={props.onSubmit}
        blurOnSubmit={false}
        ref={props.reff}
      />
    </View>
  );
};

const EmployeeEmail = props => {
  return (
    <View style={styles.TextInputView}>
      <TextInput
        style={{height: 50, marginLeft: 5, marginRight: 5}}
        placeholder="Employee Email Id"
        value={props.value}
        onChangeText={props.onChange}
        autoFocus={false}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={props.onSubmit}
        blurOnSubmit={false}
        ref={props.reff}
      />
    </View>
  );
};

const EmployeeConfirmEmail = props => {
  return (
    <View style={styles.TextInputView}>
      <TextInput
        style={{height: 50, marginLeft: 5, marginRight: 5}}
        placeholder="Confirm Employee Email Id"
        value={props.value}
        onChangeText={props.onChange}
        autoFocus={false}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={props.onSubmit}
        blurOnSubmit={false}
        ref={props.reff}
      />
    </View>
  );
};

const EmployeeTitle = props => {
  return (
    <View style={styles.TextInputView}>
      <TextInput
        style={{height: 50, marginLeft: 5, marginRight: 5}}
        placeholder="Employee Title"
        value={props.value}
        onChangeText={props.onChange}
        autoFocus={false}
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={props.onSubmit}
        blurOnSubmit={false}
        ref={props.reff}
      />
    </View>
  );
};

const EmployeeDepartment = props => {
  return (
    <View style={styles.TextInputView}>
      <TextInput
        style={{height: 50, marginLeft: 5, marginRight: 5}}
        placeholder="Employee Department"
        value={props.value}
        onChangeText={props.onChange}
        autoFocus={false}
        keyboardType="default"
        onSubmitEditing={props.onSubmit}
        blurOnSubmit={false}
        ref={props.reff}
      />
    </View>
  );
};

const EmployeeSalary = props => {
  return (
    <View style={styles.TextInputView}>
      <TextInput
        style={{height: 50, marginLeft: 5, marginRight: 5}}
        placeholder="Employee Salary"
        value={props.value}
        onChangeText={props.onChange}
        autoFocus={false}
        keyboardType="number-pad"
        //returnKeyType="next"
        ref={props.reff}
      />
    </View>
  );
};

const EmployeeForm = ({navigation}) => {
  const [users, setUsers] = useState(getAllUsers());
  const empLastNameRef = useRef();
  const empEmailIdRef = useRef();
  const empConfirmEmailIdRef = useRef();
  const empTitleRef = useRef();
  const empDepartmentRef = useRef();
  const empSalaryRef = useRef();

  //const goToUserListPage = () => navigation.navigate('EmployeeList');
  const goToUserListPage = () =>
    navigation.navigate('Employee List', {screen: 'EmployeeList'});

  const [user, setUser] = useState({
    empFirstName: '',
    empLastName: '',
    empEmailId: '',
    empConfirmEmailId: '',
    empTitle: '',
    empDepartment: '',
    empSalary: '',
  });

  const TopStatusBarView = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: Platform.OS === 'ios' ? 0 : 30,
        }}></View>
    );
  };

  const HeaderView = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 50,
          backgroundColor: 'transparent',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '60%',
            height: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styles.HeaderTitle}>Employee Detail Form</Text>
        </View>

        <View
          style={{
            width: '40%',
            height: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Button color="green" title="User Listing >" onPress={goToUserList} />
        </View>
      </View>
    );
  };

  const SaveBtn = () => {
    return (
      <View
        style={{
          height: 60,
          backgroundColor: 'black',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
        }}>
        <Button color="white" title="Add User" onPress={saveEmployeeData} />
      </View>
    );
  };

  const goToUserList = () => {
    if (users.length === 0) {
      Alert.alert('No data in list. Please add a user.');
      return;
    }
    goToUserListPage();
  };

  const saveEmployeeData = async () => {
    if (!user.empFirstName) {
      Alert.alert('Please enter employee first name.');
      return;
    }
    if (!user.empLastName) {
      Alert.alert('Please enter employee last name.');
      return;
    }
    if (!user.empEmailId) {
      Alert.alert('Please enter employee email id.');
      return;
    }
    if (!user.empConfirmEmailId) {
      Alert.alert('Please enter employee confirm email id.');
      return;
    }
    if (user.empEmailId !== user.empConfirmEmailId) {
      Alert.alert('Please enter same email id.');
      return;
    }
    if (!user.empTitle) {
      Alert.alert('Please enter employee title.');
      return;
    }
    if (!user.empDepartment) {
      Alert.alert('Please enter employee department.');
      return;
    }
    if (!user.empSalary) {
      Alert.alert('Please enter employee salary.');
      return;
    }
    addUser(
      Math.floor(Math.random() * 500),
      user.empFirstName,
      user.empLastName,
      user.empEmailId,
      user.empConfirmEmailId,
      user.empTitle,
      user.empDepartment,
      user.empSalary,
    );

    //To clear form after add user.
    setUser({
      empFirstName: '',
      empLastName: '',
      empEmailId: '',
      empConfirmEmailId: '',
      empTitle: '',
      empDepartment: '',
      empSalary: '',
    });
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="on-drag">
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <TopStatusBarView />
          <HeaderView />
          <EmployeeFirstName
            value={user.empFirstName}
            onChange={text => setUser({...user, empFirstName: text})}
            onSubmit={() => {
              empLastNameRef.current.focus();
            }}
          />
          <EmployeeLastName
            value={user.empLastName}
            onChange={text => setUser({...user, empLastName: text})}
            onSubmit={() => {
              empEmailIdRef.current.focus();
            }}
            reff={empLastNameRef}
          />
          <EmployeeEmail
            value={user.empEmailId}
            onChange={text => setUser({...user, empEmailId: text})}
            onSubmit={() => {
              empConfirmEmailIdRef.current.focus();
            }}
            reff={empEmailIdRef}
          />
          <EmployeeConfirmEmail
            value={user.empConfirmEmailId}
            onChange={text => setUser({...user, empConfirmEmailId: text})}
            onSubmit={() => {
              empTitleRef.current.focus();
            }}
            reff={empConfirmEmailIdRef}
          />
          <EmployeeTitle
            value={user.empTitle}
            onChange={text => setUser({...user, empTitle: text})}
            onSubmit={() => {
              empDepartmentRef.current.focus();
            }}
            reff={empTitleRef}
          />
          <EmployeeDepartment
            value={user.empDepartment}
            onChange={text => setUser({...user, empDepartment: text})}
            onSubmit={() => {
              empSalaryRef.current.focus();
            }}
            reff={empDepartmentRef}
          />
          <EmployeeSalary
            value={user.empSalary}
            onChange={text => setUser({...user, empSalary: text})}
            reff={empSalaryRef}
          />
          <SaveBtn />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeaderTitle: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  TextInputView: {
    height: 50,
    backgroundColor: 'transparent',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default EmployeeForm;
