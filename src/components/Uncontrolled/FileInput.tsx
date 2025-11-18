import { useRef } from "react"

export const FileInput = () => {

    const fileRef = useRef<HTMLInputElement>(null);
    console.log('Some change in uncontrolled file input')

    const handleClick = () => {
        if (fileRef.current?.files?.length) {
            console.log("Content:", fileRef.current.files[0]);
        } else {
            console.log("File is empty");
        }
    };

    return (
        <>
            <input
                type='file'
                ref={fileRef}
                placeholder="Put some file here"
            />
            <button onClick={handleClick}>
                See file information
            </button>
        </>
    )
}