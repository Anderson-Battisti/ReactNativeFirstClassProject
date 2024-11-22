import { Background } from "@react-navigation/elements";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const colors = {
    background: '#CFD8DC',
    blue: '#0096FF',
    backgroundInput: "#FFC300",
    inputBorder: "#FF5733"
};

export const theme = StyleSheet.create
({
    container: 
    {
        flex: 1,
        margin: 12
    },

    button:
    {
        backgroundColor: colors.blue,
        padding: 12,
        borderRadius: 12,
        width: '40%'
    },

    buttonView:
    {
        flex: 1,
        gap: 10,
        alignItems: "center"
    },

    buttonText:
    {
        fontSize: 20,
        textAlign: 'center'
    },

    input:
    {
        backgroundColor: colors.backgroundInput,
        fontSize: 16,
        padding: 12,
        borderWidth: 0.5,
        borderColor: colors.inputBorder,
        borderRadius: 8
    },

    label: {
        fontSize: 20,
        fontWeight: 500,
        marginVertical: 8
    },
    listItem: {
        fontSize: 60,
        marginBottom: 8
    }
});