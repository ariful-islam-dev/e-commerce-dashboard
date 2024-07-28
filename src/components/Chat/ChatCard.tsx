import { Link } from "react-router-dom"
import devid from '../../assets/images/img-m1.png'
import henry from '../../assets/images/img-f1.png'


const chatData = [
    {
        avatar: devid,
        name: 'Devid Heilo',
        text: 'How are you?',
        time: 12,
        textCount: 3,
        color: '#10B981',
    },
    {
        avatar: henry,
        name: 'Henry Fisher',
        text: 'Waiting for you!',
        time: 12,
        textCount: 0,
        color: '#dc3545',
    },
    {
        avatar: devid,
        name: 'Jhon Doe',
        text: "What's up?",
        time: 32,
        textCount: 0,
        color: '#10b981',
    },
    {
        avatar: devid,
        name: 'Alex Mertin',
        text: "Great",
        time: 32,
        textCount: 2,
        color: '#ffba00',
    },
    {
        avatar: henry,
        name: 'Jorze Henry',
        text: "How are you?",
        time: 32,
        textCount: 0,
        color: '#10b981',
    },
    {
        avatar: devid,
        name: 'Jhon Doe',
        text: "How are you?",
        time: 32,
        textCount: 3,
        color: '#ffba00',
    },
]
const ChatCard = () => {
    return (
        <div className="col-span-12 py-6 bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <h4 className="mb-6 text-xl font-semibold text-black px-7 5 dark:text-white">
                Charts
            </h4>
            <div>
                {
                    chatData.map((chat, key) => (
                        <Link to="/"
                            className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4 " key={key}>
                            <div className="relative border-2 rounded-full h-14 w-14 border-gray">
                                <img src={chat.avatar} alt="User" />
                                <span
                                    className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2  dark:border-white"
                                    style={{ background: chat.color }}
                                ></span>
                            </div>
                            <div className="flex items-center justify-between flex-1">
                                <div>
                                    <h5 className="font-medium text-black dark:text-white">
                                        {chat.name}
                                    </h5>
                                    <p>
                                        <span className="text-sm text-black dark:text-white">
                                            {chat.text}
                                        </span>
                                        <span className="text-xs">. {chat.time} min</span>
                                    </p>
                                </div>
                                {
                                    chat.textCount !== 0 && (
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                                            <span className="text-sm font-medium text-white">{" "}{chat.textCount}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ChatCard