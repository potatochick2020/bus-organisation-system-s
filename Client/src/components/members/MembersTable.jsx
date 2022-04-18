function MembersTable (){
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
        const res = await axios.get("/members/getAll");
        console.log("here");
        console.log(res.data);
        setMembers(res.data);
        };
        fetchMembers();
    });

    return (
        <>
        </>
    );
}

export default MembersTable;
