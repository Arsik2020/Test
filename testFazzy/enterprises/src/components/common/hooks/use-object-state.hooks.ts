import {Dispatch, SetStateAction, useState} from "react";

export const useObjectState = <T extends {[key: string]: any}>(initValue: T): [T, (field: string, value: any) => void, Dispatch<SetStateAction<T>>] => {

    const [object, setObject] = useState<T>(initValue);

    const setObjectValueByField = (field: string, value: any) => {
        setObject(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    return [object, setObjectValueByField, setObject];
}