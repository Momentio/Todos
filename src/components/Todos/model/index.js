import GlobalModel from "global-model";

export default (parrentPath = "", name = "todos") => {
    return new GlobalModel(
        parrentPath,
        name,
        [],
        [
            {
                title: "Заголовок",
                description: "Описание",
                isEditing: false,
                isActived: true
            }
        ]
    );
};