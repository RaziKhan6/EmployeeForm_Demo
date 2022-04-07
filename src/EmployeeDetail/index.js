import {Text, View, SafeAreaView} from 'react-native';
import React from 'react';

function EmployeeDetail({navigation, route}) {
  const {user} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee Id:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user._id}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee First Name:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user.empFirstName}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee Last Name:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user.empLastName}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee Email Id:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user.empEmailId}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee Confirm Email Id:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user.empConfirmEmailId}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee Title:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user.empTitle}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee Department:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user.empDepartment}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 20,
              }}>
              Employee Salary:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '50%',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '300',
                fontSize: 16,
                letterSpacing: 0.5,
                marginStart: 0,
              }}>
              {user.empSalary}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EmployeeDetail;
