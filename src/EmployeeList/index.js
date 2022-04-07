import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import realm, {getAllUsers} from '../../Database';
import {Searchbar} from 'react-native-paper';
import filter from 'lodash.filter';

function EmployeeList({navigation, route}) {
  const keyExtractor = item => `${item._id}`;

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);

  function contains({empFirstName}, query1) {
    console.log(`Print Query:- ${query1} Print Title:- ${empFirstName}`);
    const titleQuery = empFirstName.toLowerCase();
    if (titleQuery.includes(query1)) {
      return true;
    }
    return false;
  }

  function handleSearch(text) {
    console.log(`Print Formated Query:- ${text}`);
    const formattedQuery = text.toLowerCase();
    console.log(`Print Formated Query1:- ${formattedQuery}`);
    const data1 = filter(fullData, empFirstName => {
      return contains(empFirstName, formattedQuery);
    });
    setQuery(text);
    setData(data1);
  }
  useEffect(() => {
    setFullData(getAllUsers());
    setData(getAllUsers());
  }, []);

  // const onChangeSearch = query => setSearchQuery(query);

  const goToUserDetailPage = item =>
    navigation.navigate('Employee Details', {
      screen: 'EmployeeDetail',
      user: {
        _id: item._id,
        empFirstName: item.empFirstName,
        empLastName: item.empLastName,
        empEmailId: item.empEmailId,
        empConfirmEmailId: item.empConfirmEmailId,
        empTitle: item.empTitle,
        empDepartment: item.empDepartment,
        empSalary: item.empSalary,
      },
    });

  const CardListView = () => {
    return (
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={renderItemForCardList}
        keyExtractor={keyExtractor}
      />
    );
  };

  const renderItemForCardList = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => goToUserDetailPage(item)}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'grey',
              fontWeight: '700',
              fontSize: 16,
              letterSpacing: 0.5,
              marginStart: 20,
            }}>
            {item.empFirstName} {item.empLastName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return <View style={{height: 1, backgroundColor: 'black'}} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: 80, backgroundColor: 'white'}}>
          <Searchbar
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 15,
              borderWidth: 1,
              borderColor: 'lightgrey',
              shadowOpacity: 0,
            }}
            //theme={styles.textInputOutlineStyle}
            placeholder="Search"
            onChangeText={queryText => handleSearch(queryText)}
            value={query}
          />
        </View>
        <CardListView />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInputOutlineStyle: {
    colors: {
      placeholder: 'black',
      text: 'black',
      primary: 'black',
      underlineColor: 'transparent',
      background: '#0f1a2b',
      borderColor: 'red',
    },
  },
});

export default EmployeeList;
