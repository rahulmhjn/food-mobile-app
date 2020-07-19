import React, {useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filteredResult = (price) => {
        return results.filter((result) => {
            return result.price == price;
        })
    }
    
    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange = {newTerm => setTerm(newTerm)}
            onTermSubmit={() => {searchApi(term)}}
            />
            {errorMessage? <Text>{errorMessage}</Text>: null}
            <ScrollView>
            <ResultsList results = {filteredResult('$')} title = "Cost Effective"

            />
            <ResultsList results = {filteredResult('$$')} title = "Big Pricier" 
               
            />
            <ResultsList results = {filteredResult('$$$')} title = "Big Spender" 
              
            />
            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({});


export default SearchScreen;