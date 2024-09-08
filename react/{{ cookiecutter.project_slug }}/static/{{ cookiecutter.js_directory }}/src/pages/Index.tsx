export default function Index() {
    const frameworkName = "React";
    const styles = {
        content: {
            width: "75%",
            margin: "auto",
            textAlign: "center",
            fontFamily: "Georgia, Cambria"
        },
        logo: {
            maxHeight: "5em",
            margin: "0 10pt",
        },
        info: {
            color: "#787878"
        }
    };
    return (
        <div style={styles.content}>
            <img style={styles.logo} src="https://flask.palletsprojects.com/en/2.0.x/_static/flask-icon.png" alt="Flask logo" />
            <img style={styles.logo} src="https://avatars.githubusercontent.com/u/47703742?s=200&v=4" alt="Inertia logo" />
            <img style={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo" />
            <h1 class="title">Welcome to your Flask-Inertia {frameworkName} app.</h1>
            <p style={styles.info}>
                For more information please visit the <a href="https://flask-inertia.readthedocs.io/">documentation</a>
            </p>
        </div>
    )
}
