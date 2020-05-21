use expensetracker_db;
INSERT INTO user(id, email, password, firstName, lastName, manager)
    VALUES
        ('dd17393a-4c4d-4441-a32f-b8d8107988f8', 'foti@company.com', '$2y$12$j4eYxx/33eTi1/sOL21NnuHxxmyQmmfiuHA/S6gZgZcRdhKwKfyL2', 'Foti', 'Mougos',''),
        ('8a7a5e32-a980-48ea-a9b4-be0a68ec732f', 'homer@company.com', '$2y$12$j4eYxx/33eTi1/sOL21NnuHxxmyQmmfiuHA/S6gZgZcRdhKwKfyL2', 'Homer', 'Simpson','dd17393a-4c4d-4441-a32f-b8d8107988f8'),
        ('ca7c3872-e804-4ed8-ae4d-fc2668ffe249', 'barney@company.com', '$2y$12$j4eYxx/33eTi1/sOL21NnuHxxmyQmmfiuHA/S6gZgZcRdhKwKfyL2', 'Barney', 'Gumble', '8a7a5e32-a980-48ea-a9b4-be0a68ec732f');

INSERT INTO receipt(id, user, transactionDate, transactionType, transactionNumber, amount, tax, vendor, description, justification)
    VALUES
        ('5b8b47a9-8f7a-4cee-8ce4-4eb71f41ece2', 'dd17393a-4c4d-4441-a32f-b8d8107988f8', '2020-05-14', 'Card', '9023182323', 31.82, 3.18, 'Jaycar', 'Heatshrink, pliers and some relays', 'Needed for job out in sth morang'),
        ('e61a0c73-643e-4f89-89e7-993c46520ce7', 'dd17393a-4c4d-4441-a32f-b8d8107988f8', '2020-05-12', 'Cash', '4356436534', 45.45, 4.55, 'BP', 'Premium 98', 'Ute'),
        ('54946a6c-59b1-4420-bbd9-8961a5c90b59', '8a7a5e32-a980-48ea-a9b4-be0a68ec732f', '2020-05-13', 'Cash', '101', 111.82, 11.18, 'OfficeWorks', 'Bought new printer, whiteboard and webcam for War room', 'War room set up'),
        ('66583f50-ed5f-4637-b8e3-b5bf48fc2e62', '8a7a5e32-a980-48ea-a9b4-be0a68ec732f', '2020-05-10', 'Cash', '100032', 454.55, 45.45, 'Bunnings', 'Indoor plant', 'thought it looked good'),
        ('8f7b6767-5fb4-4e95-b106-e9818a582e6a', '8a7a5e32-a980-48ea-a9b4-be0a68ec732f', '2020-05-09', 'Cash', '9312319034', 81.82, 8.18, 'Shell', 'Premium 98', 'Work van'),
        ('dde4ecf8-c3f8-4865-bc4b-28640e40beba', 'ca7c3872-e804-4ed8-ae4d-fc2668ffe249', '2020-05-14', 'Card', '9312391081', 60.00, 6.00, 'Sporting Globe', 'HALF PRICE WINGS FOR THE TEAM', 'team needed feeding'),
        ('302a098f-afdc-4644-aa95-5a8dbc18122b', 'ca7c3872-e804-4ed8-ae4d-fc2668ffe249', '2020-05-12', 'Cash', '7301297830', 13.64, 1.36, 'Mister Minh', 'Crispy Chilli Beef', 'Thanks boss'),
        ('f1b016d1-0c8c-4ef7-b5b1-d3449d5147ce', 'ca7c3872-e804-4ed8-ae4d-fc2668ffe249', '2020-05-08', 'Card', '3129038110', 9.09, 0.91, 'Smokey Chooks', 'Quarter chicken n chippies with gravy', 'Hungry AF')
