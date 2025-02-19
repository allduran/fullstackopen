const Languages = ({country}) => {
    return (
        <>
            <p>Languages:</p>
            <ul>
                {(() => {
                    if (!country.languages) {
                        return <li>No languages available</li>;
                    }

                    const languagesArray = Object.entries(country.languages);

                    if (languagesArray.length === 0) {
                        return <li>No languages available</li>;
                    }

                    return languagesArray.map(([langCode, langName]) => (
                        <li key={langCode}>{langName}</li>
                    ));
                })()}
            </ul>
        </>
    )
}

export default Languages