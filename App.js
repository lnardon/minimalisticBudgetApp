import React from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, StatusBar, Modal, TextInput, FlatList, AsyncStorage } from 'react-native';
import styles from './styles';
import * as Font from 'expo-font';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      budgetModalVisible: false,
      currentBudget: 750,
      newBudget: -1,
      cost: 0,
      expensesHistory: [],
      fontLoaded: false
    };
  }

  async componentWillMount(){
    await Font.loadAsync({
      'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount(){
     AsyncStorage.getItem('budget').then( (b) => {
       this.setState({
         currentBudget: JSON.parse(b)
       })
     })
     .then( () => {
      AsyncStorage.getItem('expenses').then( (e) => {
        this.setState({
          expensesHistory: JSON.parse(e)
        })
      })
     } )
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setBudgetModalVisible(visible) {
    this.setState({budgetModalVisible: visible});
  }

  addAction = async () => {
    if (this.cost > 0){
      if( this.state.expensesHistory == null ){
        this.setState({ expensesHistory: [{name : this.expenseName, cost :this.cost, time: Date.now()}] })
      } else{
        this.setState({expensesHistory: [{name : this.expenseName, cost :this.cost, time: Date.now()}, ...this.state.expensesHistory]});
      }
      let budgetCalc = this.state.currentBudget - this.cost;
      budgetCalc = budgetCalc.toFixed(2);
      await this.setState({modalVisible: false, currentBudget: budgetCalc});
      this.cost = 0;
    }
    else {
      this.setState({modalVisible: false}); 
    }
    AsyncStorage.setItem('expenses', JSON.stringify(this.state.expensesHistory));
    AsyncStorage.setItem('budget', JSON.stringify(this.state.currentBudget));
  }

  editBudget = () => {
    if (this.newBudget > 0 && this.newBudget<999999){
      this.setState({currentBudget: this.newBudget});
      this.setState({budgetModalVisible: false});
    } 
    else {
      this.setState({budgetModalVisible: false}); 
    } 
    AsyncStorage.removeItem('budget').then( () => {
      AsyncStorage.setItem('budget', JSON.stringify(this.state.currentBudget));
    } )
  }

  deleteExpense = i => {
    this.state.expensesHistory.splice(i, 1);
    AsyncStorage.setItem('expenses', JSON.stringify(this.state.expensesHistory));
    console.log(this.state.expensesHistory)
    this.setState({expensesHistory: this.state.expensesHistory  })
  };

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
          <View style={styles.topCard}>
          <TouchableOpacity onPress={()=>this.setBudgetModalVisible(true)} onLongPress={ ()=>{AsyncStorage.clear()}} >     
            <Text style={styles.totalBudget}>$ {this.state.currentBudget}</Text> 
          </TouchableOpacity>                       
        </View>
        ) : null
      }
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle = "dark-content"/> 
        <Modal 
                style={{backgroundColor: 'blue'}}
                animationType='slide'
                visible={this.state.budgetModalVisible} 
                transparent={true} >
                <View style={styles.budgetPopup}>
                  <TextInput style={{ fontSize: 17 , fontFamily: 'montserrat-light' , textAlign: 'center' , width: '90%'}} placeholder={"Type Your Budget Here"} autoFocus={true}  keyboardType={"numeric"} onChangeText={(nwbd) => this.newBudget = nwbd.replace(/,/g, '.')} onSubmitEditing={this.editBudget}/>
                  <Text style={styles.budgetModalCloseBtn} onPress={ () => { this.setState({budgetModalVisible: false})}} > Close </Text>
                </View>
        </Modal>


      {/* Expenses List*/}
      <FlatList
        style={styles.list}
        data={this.state.expensesHistory}
        renderItem={({item, index}) => 
        <TouchableOpacity onLongPress={()=>this.deleteExpense(index)} onPress={ ()=>{alert( "Spent on: " + Date(item.time))} } >
          <View style={styles.expenseCardParent}>
            <View style={styles.expenseCard}>
              <Text style={styles.expenseCardId}> {item.name} </Text>
              <Text style={styles.expenseCardValue}> - {item.cost}</Text>
            </View> 
          </View>
        </TouchableOpacity>}
        keyExtractor={( item, index) => index.toString()}
      />


        {/*Add button */}
        <View style={styles.addParent}>
          <TouchableOpacity activeOpacity={0.6} onPress={()=>this.setModalVisible(true)}>
          {
          this.state.fontLoaded ? (
            <Text style={styles.addBtn} > + </Text>
            ) : null
          }
          </TouchableOpacity>
        </View>


        {/* Expense Input Card*/}
          <Modal style={{backgroundColor: 'blue'}} 
                animationType='slide'
                visible={this.state.modalVisible} 
                transparent={true}
                >
            <View style={styles.addPopup}>
              <View style={styles.addPopupCard}>
              <Text style={styles.addTittle}>Expense</Text>
                <TextInput  placeholder={'Name your Expense'} 
                            autoFocus = {true} 
                            onChangeText={(expenseName) => this.expenseName = expenseName} 
                            style={styles.addInputName}
                            keyboardAvoidingView={false}
                            />
                <TextInput  placeholder={'Type your Expense Value'} 
                            keyboardType='numeric'
                            lang="pt"
                            onSubmitEditing={this.addAction} 
                            onChangeText={(userValue) => this.cost = userValue.replace(/,/g, '.')}
                            style={styles.addInputValue}
                            keyboardAvoidingView={false}
                            />
                <TouchableHighlight style={styles.addPopupBtn} onPress={this.addAction}>
                  <Text style={{fontSize: 20,fontFamily: "montserrat-light",}}>OK</Text>
                </TouchableHighlight>
              </View> 
            </View> 
          </Modal> 
      </View>
    );
  }
}
