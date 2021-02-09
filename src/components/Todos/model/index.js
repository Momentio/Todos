import GlobalModel from "../../../model/GlobalModel";

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