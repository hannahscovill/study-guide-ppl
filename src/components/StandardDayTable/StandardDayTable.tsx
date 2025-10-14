import React from 'react';

const StandardDayTable = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <td colSpan={2} style={{ textAlign: "center" }}>Standard Day at Sea Level</td>
                </tr>
                <tr>
                    <td>Altitude above Mean Sea Level</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>26.92"Hg</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td>59°F (15°C)</td>
                </tr>
            </tbody>
        </table>
    );
};

export default StandardDayTable;
