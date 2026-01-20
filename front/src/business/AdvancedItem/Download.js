export const Download = ({ title, name, folder, chapter }) => {

    return (
        <a href={ `/api/v1/drills/file?filename=${name}.zip&chapter=${chapter}&folder=${folder}` } download={ `${name}.zip` }>{title}</a>
    );
};
