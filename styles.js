import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 25,
    borderRadius: 30,
    height: '60%'
  },
  topCard: {
    alignItems: 'center',
    justifyContent:'center',
    height: 80,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
  },
  addPopup: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPopupCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 350,
    height: 250,
    borderRadius: 30,
    elevation: 10,
  },
  addParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  addTittle:{
    fontSize: 35,
    fontFamily: "montserrat-light",
  },
  addInputValue:{
    width: '55%',
    height: 50,
    textAlign:'center',
    borderColor: 'black',
    borderWidth: 0.1,
    fontFamily: "montserrat-light",
  },
  addInputName:{
    width: '55%',
    height: 50,
    textAlign:'center',
    borderColor: 'black',
    borderWidth: 0.1,
    fontFamily: "montserrat-light",
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#121212',
    fontSize: 95,
    fontFamily: "montserrat-light"
  },
  addPopupBtn:{
    width: 75,
    height:50,
    alignItems:'center',
    justifyContent:'center',
  },
  expenseCardParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  expenseCard: {
    backgroundColor: '#fff',
    width: '90%',
    height: 70,
    justifyContent: 'center',
    flexDirection:'row',
    borderBottomColor: 'black',
    borderBottomWidth:0.3,
  },
  expenseCardValue: {
    fontSize: 30,
    color: 'color: "rgb(219, 13, 100)"',
    marginRight: 20,
    flex:1,
    alignSelf:'center',
    justifyContent:'flex-end',
    textAlign:'right',
    fontFamily: "montserrat-light"
  },
  expenseCardId:{
    fontSize: 30,
    flex:1,
    alignSelf:'center',
    justifyContent:'flex-start',
    marginLeft:10,
    color: '#121212',
    fontFamily: "montserrat-light",
  },
  budgetPopup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 85,
    marginTop: 150,
    width: 250,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    fontFamily: "montserrat-light"
  },
  totalBudget:{
    fontSize: 49,
    fontFamily: "montserrat-light",
    color: "rgb(41, 207, 140)"
  },
  budgetModalCloseBtn: {
    fontFamily: "montserrat-light",
    fontSize: 19,
    marginTop: 35,
    color: 'grey'
  }
});
