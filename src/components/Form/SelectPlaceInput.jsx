import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { Form,Label, Segment, List } from 'semantic-ui-react'

const SelectPlaceInput = ({
    input:{ value , onChange , onBlur },
    placeholder,
    width,
    options,
    onSelect,
    meta:{touched,error}
}) => {
    return (
        <PlacesAutocomplete
            value={value}
            onChange={onChange}
            searchOptions={options}
            onSelect={onSelect}
        >  
        {/* All return Google ={getInputProps , suggestions , getSuggestionItemProps, loading}*/}
            {({ getInputProps , suggestions , getSuggestionItemProps, loading}) => (
                <Form.Field error={touched && !!error}>
                    <input placeholder={placeholder} {...getInputProps({placeholder,onBlur})} />
                    {touched && error && <Label basic color='red'> {error} </Label> }
                    {suggestions.length > 0 && 
                        <Segment style={{ marginTop:'0px',position:'absolute',width:'100%',zIndex:'1000'}}>
                            {loading && <div>loading...</div>}
                            <List selection>
                                {suggestions.map(suggestions => (
                                    <List.Item {...getSuggestionItemProps(suggestions)}>
                                        <List.Header>
                                            {suggestions.formattedSuggestion.mainText}
                                        </List.Header>
                                        <List.Description>
                                            {suggestions.formattedSuggestion.secondaryText}                                        
                                        </List.Description>                         
                                    </List.Item>

                                ))}
                            </List>
                        </Segment>
                    }
                </Form.Field>
            )}
        </PlacesAutocomplete>
    )
}

export default SelectPlaceInput
