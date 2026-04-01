const chai = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');
const Book = require('../models/book');
const {addBook,getBooks,updateBook,deleteBook} = require('../controllers/bookController');
const {expect} = chai;

describe ('AddBook Function Test',()=>{
    it('should create a new Book successfully',async() =>{
        const req = {
            user: {id: new mongoose.Types.ObjectId()},
            body:{title: "New Book", author: "author name", price:"20",type:"type"}
        };

        const createdBook ={
            _id: new mongoose.Types.ObjectId(), ...req.body,userId:req.user.id
        };

        const createStub = sinon.stub(Book,'create').resolves(createdBook);

        const res={
            status: sinon.stub().returnsThis(),
            json:sinon.spy()
        };

        await addBook(req,res);

        expect(createStub.calledOnceWith(
            req.body
        )).to.be.true;

        expect(res.status.calledWith(201)).to.be.true;
        expect(res.json.calledWith(createdBook)).to.be.true;

        createStub.restore();
    });

    it('should return 500 if an error occurs', async() => {
        const createStub = sinon.stub(Book,'create').throws(new Error('DB Error'));

        const req = {
            body:{
                title: "New Book",
                author: "author name",
                price: "20",
                type: "type"
            }
        };

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await addBook(req,res);

        expect(res.status.calledWith(500)).to.be.true;
        expect(res.json.calledWithMatch({message:'DB Error'})).to.be.true;

        createStub.restore();
    });
});

describe ('ViewBook Function Test',()=>{
    it('should get all books successfully', async()=>{
        const books =[{
            _id: new mongoose.Types.ObjectId(),
            title:'Book 1',
            author:'Author 1',
            price:'10',
            type:'fiction'
        },
        {
            _id: new mongoose.Types.ObjectId(),
            title:'Book 2',
            author:'Author 2',
            price:'30',
            type:'drama'
        }];

        const findStub = sinon.stub(Book,'find').resolves(books);

        const req={};
        const res={
            status:sinon.stub().returnsThis(),
            json:sinon.spy()
        };

        await getBooks(req,res);

        expect(findStub.calledOnce).to.be.true;
        expect(res.json.calledWith(books)).to.be.true;

        findStub.restore();

    });

    it('Should return 500 if getBooks throws an error',async()=>{
        const findStub = sinon.stub(Book,'find').throws(new Error('DB Error'));

        const req ={};
        const res ={
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await getBooks(req,res);
        
        expect(res.status.calledWith(500)).to.be.true;
        expect(res.json.calledWithMatch({message:'DB Error'})).to.be.true;

        findStub.restore();
    });
});

describe ('UpdateBook Function Test',()=>{

    it('Should update a book successfully',async()=>{
        const req ={
            params:{title:'Old Book'},
            body:{
                title:'New Book',
                author:'New author',
                price:'25',
                type:'Novel'
            }
        };

        const book ={
            title:'Old Book',
            author:'Old author',
            price:'20',
            type:'story',

            save:sinon.stub().resolves({
                title:'New Book',
                author:'New author',
                price:'25',
                type:'Novel'
            })
        };

        const findOneStub = sinon.stub(Book,'findOne').resolves(book);

        const res ={
            status: sinon.stub().returnsThis(),
            json:sinon.spy()
        };

        await updateBook(req,res);

        expect(findOneStub.calledOnceWith({title:'Old Book'})).to.be.true;
        expect(book.save.calledOnce).to.be.true;
        expect(res.json.calledOnce).to.be.true;

        findOneStub.restore();
    });

    it('should return 404 if the book to update is not found',async()=>{
        const req={
            params:{title:'Missing Book'},
            body:{
                title:'New Book',
                author:'New author',
                price:'25',
                type:'Novel'
            }
        };

        const findOneStub = sinon.stub(Book,'findOne').resolves(null);

        const res ={
            status: sinon.stub().returnsThis(),
            json:sinon.spy()
        };

        await updateBook(req,res);

        expect(findOneStub.calledOnceWith({title:'Missing Book'})).to.be.true;
        expect(res.status.calledWith(404)).to.be.true;
        expect(res.json.calledWith({message:'Book not found'})).to.be.true;

        findOneStub.restore();
    });

    it('should reutren 500 if updateBook throws an error',async()=>{
        const req ={
            params:{title:'Old Book'},
            body:{
                title:'New Book',
                author:'New author',
                price:'25',
                type:'Novel'
            }
        };

        const findOneStub = sinon.stub(Book,'findOne').throws(new Error('DB Error'));

        const res ={
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await updateBook(req,res);

        expect(res.status.calledWith(500)).to.be.true;
        expect(res.json.calledWithMatch({message:'DB Error'})).to.be.true;

        findOneStub.restore();
    });
    
    
});

describe ('DeleteBook Function Test',()=>{

    it('Should delete a book successfully', async()=> {
        const req ={
            params:{title:'Book 1'}
        };

        const book ={
            deleteOne: sinon.stub().resolves()
        };

        const findOneStub = sinon.stub(Book,'findOne').resolves(book);

        const res ={
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await deleteBook(req,res)

        expect(findOneStub.calledOnceWith({title:'Book 1'})).to.be.true;
        expect(book.deleteOne.calledOnce).to.be.true;
        expect(res.json.calledWith({message:'Book deleted'})).to.be.true;

        findOneStub.restore();

    });

    it('should return 404 if the book to delete is not found', async()=>{
        const req={
            params:{title:'Missing Book'}
        };

        const findOneStub = sinon.stub(Book,'findOne').resolves(null);

        const res={
            status: sinon.stub().returnsThis(),
            json:sinon.spy()
        };

        await deleteBook(req,res);

        expect(findOneStub.calledOnceWith({title:'Missing Book'})).to.be.true;
        expect(res.status.calledWith(404)).to.be.true;
        expect(res.json.calledWith({message:'Book not found'})).to.be.true;

        findOneStub.restore();
    });

    it('should return 500 if deleteBook throws an Error', async()=>{
        const req = {
            params:{title:'Book 1'}
        };

        const findOneStub = sinon.stub(Book,'findOne').throws(new Error('DB Error'));

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };

        await deleteBook(req,res);

        expect(res.status.calledWith(500)).to.be.true;
        expect(res.json.calledWithMatch({message:'DB Error'})).to.be.true;

        findOneStub.restore();
    });
        
    
});