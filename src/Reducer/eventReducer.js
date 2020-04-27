const initialState =[
    {
    id:'1',
    title:'Trip to London',
    date:'2018-03-27',
    category:'culture',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, voluptates, atque voluptatum laboriosam nihil sunt hic eos quo eaque voluptatibus repudiandae tempora. Minus aliquid hic ducimus suscipit ea repudiandae perferendis.',
    city:'London',
    venue:"Tower London, ST Kathrine",
    hostby:'sid',
    hostPhotoURL : '/assets/Dave.jpg',
    attendees : [{
            id:'a',
            name:'Bob',
            photoURL:'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
            id:'b',
            name:'Heta',
            photoURL:'/assets/Dave.jpg'
        }]
    },
    {
    id:'2',
    title:'Trip to india',
    date:'2018-03-27',
    category:'culture',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, voluptates, atque voluptatum laboriosam nihil sunt hic eos quo eaque voluptatibus repudiandae tempora. Minus aliquid hic ducimus suscipit ea repudiandae perferendis.',
    city:'Rajkot',
    venue:"Tower London, ST Kathrine",
    hostby:'sid',
    hostPhotoURL : '/assets/Dave2.jpg',
    attendees : [{
        id:'a',
        name:'Bob',
        photoURL:'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
            id:'b',
            name:'Heta',
            photoURL:'/assets/Dave2.jpg'
        }]
    }
]

const eventReducer = (state = initialState,action) => {
    switch(action.type) {
        
        case 'CREATE_EVENT' : {
            return [...state,action.payload.event]
            
        }

        case 'UPDATE_EVENT' : {
            return [...state.filter(event => event.id !== action.payload.event.id),action.payload.event ]
        }

        case 'DELETE_EVENT' : {
            return [...state.filter(event => event.id !== action.payload.id)]
        }

        default:{
            return state  
        }
    }
}

export default eventReducer