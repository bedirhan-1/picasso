import { SafeUser } from "../types";

interface Props {
    myUser: SafeUser | null;
}

const User: React.FC<Props> = ({ myUser }) => {

    return (
        <div className="">
            <h1>{myUser?.name}</h1>
        </div>
    );
}

export default User;