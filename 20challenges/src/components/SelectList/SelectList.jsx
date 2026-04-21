const SelectList =({ value, onChange })=>{

    return(<>
    <label>Level:</label>
            <select value={value} onChange={onChange}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
    </>)
}
export default SelectList;