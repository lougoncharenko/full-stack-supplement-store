import { useState } from 'react';
import SearchBar from "../components/SearchBar";
import SupplementContainer from "../components/SupplementContainer";

export default function Supplement({setSupplementDetail}) {
  const [inputText, setInputText] = useState("");

    return (
        <section>
            <SearchBar setInputText={setInputText}/>
            <SupplementContainer inputText={inputText} setSupplementDetail={setSupplementDetail}/>
        </section>
    );

}