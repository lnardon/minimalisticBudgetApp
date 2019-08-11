import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#323232',
  },
  list: {
    marginTop: 25,
    borderRadius: 30
  },
  topCard: {
    alignItems: 'center',
    justifyContent:'center',
    height: 80,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#323232',
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
    backgroundColor: 'white',
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
    fontSize: 35
  },
  addInputValue:{
    width: '55%',
    height: 50,
    textAlign:'center',
    borderColor: 'black',
    borderWidth: 0.1
  },
  addInputName:{
    width: '55%',
    height: 50,
    textAlign:'center',
    borderColor: 'black',
    borderWidth: 0.1
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#b2b2b2',
    fontSize: 91
  },
  addPopupBtn:{
    backgroundColor:'lightgreen',
    borderRadius:50,
    width: 75,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  expenseCardParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  expenseCard: {
    backgroundColor: '#272727',
    width: '90%',
    height: 70,
    justifyContent: 'center',
    flexDirection:'row'
  },
  expenseCardValue: {
    fontSize: 30,
    color: 'red',
    marginRight: 20,
    flex:1,
    alignSelf:'center',
    justifyContent:'flex-end',
    textAlign:'right'
  },
  expenseCardId:{
    fontSize: 30,
    flex:1,
    alignSelf:'center',
    justifyContent:'flex-start',
    marginLeft:10,
    color: 'white'
  },
});
