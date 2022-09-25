import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import CustomButton from '../components/CustomButton';
import InputText from '../components/InputText';
import { globalStyles } from '../globalStyles/globalStyles';
import { addQuote, updateQuote } from '../redux/QuotesData';
import { postQuoteDetails, updateQuoteDetails } from '../utils/http';

const ManageQuote = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addNewQuote = props.route.params?.addNewQuote;
  const { quoteId, name, quote, date } = props.route.params.defaultValue || {};

  const [quoteInputValue, setQuoteInputValue] = useState({
    name: {
      value: name ? name : '',
      isValid: true,
    },
    quote: {
      value: quote ? quote : '',
      isValid: true,
    },
  });

  const changeInputHandler = (id, data) => {
    setQuoteInputValue((quoteInput) => {
      return {
        ...quoteInput,
        [id]: { value: data, isValid: true },
      };
    });
  };
  const setEmpty = () => {
    setQuoteInputValue({
      name: {
        value: '',
        isValid: true,
      },
      quote: {
        value: '',
        isValid: true,
      },
    });
  };
  const confirmHandler = async () => {
    const value = {
      name: quoteInputValue.name.value,
      quote: quoteInputValue.quote.value,
      date: new Date(),
    };
    const nameIsValid = value.name.trim().length < 1 ? false : true;
    const quoteIsValid = value.quote.trim().length < 1 ? false : true;

    if (!nameIsValid || !quoteIsValid) {
      setQuoteInputValue(() => {
        return {
          name: {
            value: value.name,
            isValid: nameIsValid,
          },
          quote: {
            value: value.quote,
            isValid: quoteIsValid,
          },
        };
      });
      return;
    }
    if (addNewQuote) {
      const id = await postQuoteDetails(value);
      dispatch(addQuote({ quoteData: { ...value, id: id } }));
    } else {
      const response = await updateQuoteDetails(quoteId, value);
      dispatch(updateQuote({ quoteData: { ...value, id: quoteId } }));
    }
    setEmpty();
    navigation.navigate('QuotesList');
  };

  const cancelHandler = () => {
    setEmpty();
    navigation.navigate('QuotesList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {addNewQuote ? 'Add Quote' : 'Update Quote'}
      </Text>
      <View style={styles.secondaryContainer}>
        <InputText
          title='Name'
          isValid={quoteInputValue.name.isValid}
          inputProps={{
            onChangeText: changeInputHandler.bind(this, 'name'),
            value: quoteInputValue.name.value,
          }}
        />
        <InputText
          title='Quote'
          isValid={quoteInputValue.quote.isValid}
          style={{ multiline: true, textAlignVertical: 'top', height: 100 }}
          inputProps={{
            onChangeText: changeInputHandler.bind(this, 'quote'),
            value: quoteInputValue.quote.value,
          }}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={cancelHandler}
            style={{ backgroundColor: 'transparent' }}
          >
            Cancel
          </CustomButton>
          <CustomButton onPress={confirmHandler}>
            {addNewQuote ? 'Add' : 'Update'}
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default ManageQuote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.screenBackground,
    paddingTop: 110,
  },
  secondaryContainer: {
    paddingTop: 10,
  },
  title: {
    fontFamily: 'title',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
});
