import './steps.css';

const items1 = [
    'Open to hear the word',
    'Attending Bible study group',
    'Open to pray',
    'Repent of sin',
    'Get baptised'
]

const items2 = [
    'Family salvation',
    'Inoculation',
    "Meet on the Lord's day",
    'Use HWMR - Topics for New Believers - vol. 1 and 2',
    'Use HWMR - current with church',
    'Get revived alone every morning with the HWMR'
]

const items3 = [
    'Have a scheduled reading of the word with the ministry',
    'Study alone faithfully everyday',
    'Receive light from and enjoy the Lord in the Word',
    'Experience the Lord daily according to the truth',
    'Buy and read the ministry to see the vision of the age',
    'Get to know your vital group members'
]

const items4 = [
    'Pray in the church prayer meetings',
    "Prepare to prophecy every Lord's day",
    'Practice points 11, 13, 18, and 19 to join your vital group'
]

const items5 = [
    'Preach the word every day in your daily life',
    'Visit sinners by appointments to preach the gospel',
    'Shepherd the saints to grow in life step by step',
    'Take the training with your vital group'
]

function StepsList(props) {

    function clickCancel() {
        props.onClose();
    }

    function clickItem(item) {
        props.onChoose(item);
    }

    return (
        <div class="steps-bg">
            <div class="steps">
                <h3>Begotten through the gospel</h3>
                <ol>
                    {
                        items1.map((item, index) => <li key={index} onClick={() => clickItem(item)}>{item}</li>)
                    }
                </ol>
                <h3>Nourished to grow</h3>
                <ol start="6">
                    {
                        items2.map((item, index) => <li key={index} onClick={() => clickItem(item)}>{item}</li>)
                    }
                </ol>
                <h3>Perfected and constituted with the truth</h3>
                <ol start="12">
                    {
                        items3.map((item, index) => <li key={index} onClick={() => clickItem(item)}>{item}</li>)
                    }
                </ol>
                <h3>Building the church through the God-ordained way</h3>
                <ol start="18">
                    {
                        items4.map((item, index) => <li key={index} onClick={() => clickItem(item)}>{item}</li>)
                    }
                </ol>
                <h3>Practicing the vital group for the increase of the group and the church</h3>
                <ol start="21">
                    {
                        items5.map((item, index) => <li key={index} onClick={() => clickItem(item)}>{item}</li>)
                    }
                </ol>
                <button class="big" onClick={clickCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default StepsList;