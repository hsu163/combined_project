import { useEffect, useState } from "react";
import { CategoryDto } from "../ds/category.dto";
import { createCoursesApiCall, getAllCategories } from "../service/course.service";
import { getLoggedInUserName } from "../service/auth.service";
import { useNavigate } from "react-router-dom";


export default function CreateCourseComponent() {

    const [categories, setCategories] = useState<CategoryDto[]>([]);
    const navigator = useNavigate();


    useEffect(() => {
        getAllCategories().then(res => setCategories(res.data))
        .catch(err => console.log(err));
    }, []);

    const courseCreateHandler = (e) => {
        e.preventDefault();

        const username = getLoggedInUserName();

        const formData = new FormData();
        formData.append('title', e.target.title.value);
        formData.append('description', e.target.description.value);
        formData.append('fees', e.target.fees.value);
        formData.append('image', e.target.image.files[0]); // Corrected for file input
        formData.append('category_name', e.target.category_name.value);
        formData.append('username', username as string);

        createCoursesApiCall(formData)
        .then(res => {
            console.log(res.data);
            e.target.reset();

            // Reset the form fields
            // e.target.title.value = '';
            // e.target.description.value = '';
            // e.target.fees.value = '';
            // e.target.image.value = ''; // Reset file input
            // e.target.category_name.value = '';
            navigator('/');
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    return (
        <form onSubmit={courseCreateHandler}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text"
                 className="form-control"
                 id="title" name="title" required />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description:</label>
                <textarea id="description"
                 className="form-control"
                 name="description" required />
            </div>
            <div className="mb-3">
                <label htmlFor="fees" className="form-label">Fees:</label>
                <input type="number" id="fees"
                 className="form-control"
                 name="fees" step="0.01" required />
            </div>
            <div className="mb-3">
                <label htmlFor="category_name" className="form-label">Category Name:</label>
                <select id="category_name" className="form-control" name="category_name" required>
                    <option>Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.categoryName}>{category.categoryName}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image:</label>
                <input type="file"
                className="form-control" id="image" name="image" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Create Course</button>
        </form>
    );
}