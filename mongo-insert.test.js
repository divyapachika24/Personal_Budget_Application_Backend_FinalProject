const mongoose = require('mongoose');
//const budgetModel = require('./models/budgetPlanModel');
const UserModel = require('./models/userModel');
//const expenseModel=require('./models/budgetSpentModel');
const userData = { email: 'geek@gmail.com', password:'password',displayName:'geek' };
let user_id='';
describe('User login Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server
    // By using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validUser = new UserModel(userData);
        const savedUser = await validUser.save();
        // Object Id should be defined on saving successfully to MongoDB.
        user_id=savedUser._id;
        expect(savedUser._id).toBeDefined();
        expect(savedUser.email).toBe(userData.email);
    });

    // it('save budget successfully', async () => {
    //     budgetData={category:'school',plannedAmount:'1000',userId: user_id};
    //     const budget=new budgetPlanModel(budgetData);
    //     const savedBudget = await budget.save();
    //     expect(savedBudget._id).toBeDefined();
    //     expect(savedBudget.title).toBe(budgetData.title);
        
    // });

    // it('save expense successfully', async () => {
    //     expenseData={category2:'school',spentAmount:'1000',userId: user_id};
    //     const expense=new budgetSpentModel(expenseData);
    //     const savedExpense = await expense.save();
    //     expect(savedExpense._id).toBeDefined();jest
    //     expect(savedExpense.title).toBe(expenseData.title);
    // });
})