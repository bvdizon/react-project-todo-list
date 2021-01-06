import React, { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        const { items, clearList, deleteItem } = this.props;
        return (
            <section className="px-3">
                <ul className="list-group list-group-flush">
                    {items.map(item => <Todo key={item.id} item={item} deleteItem={deleteItem} />) }
                </ul> 

                {
                    items.length > 0 ? (
                        <button type="button" className="btn btn-block btn-outline-danger mt-3" onClick={ clearList }>Clear List Items</button>
                    ) : (
                            <h5 className="text-center">Nice. All caught up! <i className="fa fa-coffee text-primary"></i></h5>
                    )
                }
                

            </section>
        )
    }
}
