import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import InputText from '../components/InputText';
import { globalStyles } from '../globalStyles/globalStyles';
import { addQuote, updateQuote, deleteQuote } from '../redux/QuotesData';
import {
  deleteQuoteDetails,
  postQuoteDetails,
  updateQuoteDetails,
} from '../utils/http';
import ManageQuoteHeader from '../components/ManageQuoteHeader';
import BottomButtonContainer from '../components/BottomButtonContainer';

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
    navigation.navigate('QuotesList');
  };

  const cancelHandler = () => {
    navigation.navigate('QuotesList');
  };

  const headerPressHandler = (operation) => {
    if (operation === 'delete') {
      dispatch(deleteQuote({ id: quoteId }));
      deleteQuoteDetails(quoteId);
      cancelHandler();
    } else {
      confirmHandler();
    }
  };

  return (
    <View style={styles.container}>
      <ManageQuoteHeader
        addNewQuote={addNewQuote}
        headerPressHandler={headerPressHandler}
      />
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
          style={{
            textAlignVertical: 'top',
            height: 100,
          }}
          inputProps={{
            onChangeText: changeInputHandler.bind(this, 'quote'),
            value: quoteInputValue.quote.value,
            multiline: true,
            numberOfLines: 4,
          }}
        />
        <BottomButtonContainer
          cancelHandler={cancelHandler}
          confirmHandler={confirmHandler}
          addNewQuote={addNewQuote}
        />
      </View>
    </View>
  );
};

export default ManageQuote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.screenBackground,
    paddingTop: 100,
  },
  secondaryContainer: {
    paddingTop: 10,
  },
});
