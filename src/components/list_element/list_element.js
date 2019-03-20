import React, { Component } from 'react';
import { Card, Radio, TextArea, Button } from 'semantic-ui-react';
import './list-element.css';

class ListElement extends Component {

    render(){
        const {username,
            email,
            status, 
            adm_permission,
            text,
            toggleTask,
            toggleChange,
            taskChange,
            changed
        } = this.props;
        
        return(
            <Card color={status === 10 ?  'grey': 'green'}>
                <Card.Content>
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta>{email}</Card.Meta>
                    <Card.Description 
                        onClick={() => adm_permission === true ? toggleChange() : null }
                        style={status === 10 
                            ? {textDecoration:'line-through'}
                            :{textDecoration:'none'}}>
                        {text}
                    </Card.Description>
                    { adm_permission === true                                
                        ?changed === true 
                            ? ( <div> 
                                <TextArea 
                                    className='change-textarea'
                                    autoHeight
                                    value={text}
                                    onChange={(e) => taskChange(e) }
                                />
                                <Button
                                    style={{marginTop: '10px'}}
                                    inverted color='green'
                                    onClick={() => toggleChange()}
                                >Change</Button>
                            </div> 
                            )
                            :null
                        :null    
                    }
                </Card.Content>{ 
                    adm_permission === true
                        ? (<Card.Content extra className='card-bottom'>
                            <label>Done</label>
                            <Radio toggle
                                checked={
                                    status === 10 
                                        ? true
                                        : false
                                }
                                onChange={() => toggleTask() }
                            />
                        </Card.Content>)
                        : null }
            </Card>
        );
    }
}

export default ListElement;
