import './StrengthMeter.scss';

function StrengthMeter({smallPassword, easyPassword, mediumPassword, strongPassword}) {

    const styles = {
        empty: {
            backgroundColor: "#cdcdcd",
            border: "1px solid #cdcdcd",
        },
        easy: {
            backgroundColor: "red",
            border: "1px solid red",
        },
        medium: {
            backgroundColor: "yellow",
            border: "1px solid yellow",
        },
        strong: {
            backgroundColor: "green",
            border: "1px solid green",
        },
      };

      return(
        <div className="strength-meter-bar">
            <div className="strength-meter-section">
                {smallPassword ? 
                <div className="strength-meter-section" style={styles.easy}></div> : 
                strongPassword === true ? 
                <div className="strength-meter-section" style={styles.strong}></div> : 
                mediumPassword === true ? 
                <div className="strength-meter-section" style={styles.medium}></div> : 
                easyPassword === true ? 
                <div className="strength-meter-section" style={styles.easy}></div> : 
                <div style={styles.empty}></div>}
            </div>
            <div className="strength-meter-section">
                {smallPassword ? 
                <div className="strength-meter-section" style={styles.easy}></div> : 
                strongPassword === true ? 
                <div className="strength-meter-section" style={styles.strong}></div> : 
                mediumPassword === true ? 
                <div className="strength-meter-section" style={styles.medium}></div> : 
                easyPassword === true ? 
                <div className="strength-meter-section" style={styles.empty}></div> : 
                <div style={styles.empty}></div>}
            </div>
            <div className="strength-meter-section">
                {smallPassword ? 
                <div className="strength-meter-section" style={styles.easy}></div> : 
                strongPassword === true ? 
                <div className="strength-meter-section" style={styles.strong}></div> : 
                mediumPassword === true ? 
                <div className="strength-meter-section" style={styles.empty}></div> : 
                easyPassword === true ? 
                <div className="strength-meter-section" style={styles.empty}></div> : 
                <div style={styles.empty}></div>}
            </div>
        </div>
    )
}

export default StrengthMeter;