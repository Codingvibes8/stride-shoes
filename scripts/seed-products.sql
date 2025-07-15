INSERT INTO products (name, description, price, category, subcategory, images, sizes, colors, stock, featured) VALUES
-- Sneakers
('Nike Air Max 270 Men''s', 'Iconic sneakers with Max Air cushioning for all-day comfort and modern style.', 149.99, 'footwear', 'sneakers', 
 ARRAY['/sneakers-nike-airmax.jpg'], 
 ARRAY['8','9','10','11','12','13'], 
 ARRAY['Black/White','Midnight Navy','Wolf Grey'], 85, true),

('Adidas Forum Low OG', 'Classic 80s basketball silhouette reimagined for streetwear.', 119.99, 'footwear', 'sneakers', 
 ARRAY['/sneakers-adidas-forum.jpg'], 
 ARRAY['7','8','9','10','11','12'], 
 ARRAY['Cloud White','Core Black','Bold Blue'], 60, true),

-- Running
('New Balance FuelCell Rebel v4', 'Lightweight racing shoes with energy-return FuelCell midsole.', 159.99, 'footwear', 'running', 
 ARRAY['/running-newbalance.jpg'], 
 ARRAY['8','9','10','11','12'], 
 ARRAY['Electric Lime','Blackout','Deep Ocean'], 45, true),

('Asics Gel-Kayano 30', 'Stability running shoes with FF BLAST™ PLUS cushioning.', 159.99, 'footwear', 'running', 
 ARRAY['/running-asics.jpg'], 
 ARRAY['8','9','10','11','12','13'], 
 ARRAY['Black/Silver','Ocean Blue/White'], 55, false),

-- Boots
('Timberland 6-Inch Premium', 'Waterproof leather boots perfect for outdoor adventures.', 199.99, 'footwear', 'boots', 
 ARRAY['/boots-timberland.jpg'], 
 ARRAY['8','9','10','11','12'], 
 ARRAY['Wheat Nubuck','Black','Dark Brown'], 50, true),

('Red Wing Iron Ranger', 'Heritage-grade leather boots with Goodyear welt construction.', 349.99, 'footwear', 'boots', 
 ARRAY['/boots-redwing.jpg'], 
 ARRAY['8','9','10','11','12'], 
 ARRAY['Amber Harness','Copper Rough & Tough'], 30, true),

-- Formal
('Johnston & Murphy Melton Oxford', 'Premium leather dress shoes with cushioned insole.', 229.99, 'footwear', 'formal', 
 ARRAY['/formal-oxford.jpg'], 
 ARRAY['8','8.5','9','9.5','10','10.5','11'], 
 ARRAY['Black','Dark Brown','Burgundy'], 25, true),

('Cole Haan Grandpro Spectator', 'Modern wingtips with lightweight Grand.ØS technology.', 179.99, 'footwear', 'formal', 
 ARRAY['/formal-colehaan.jpg'], 
 ARRAY['8','9','10','11','12'], 
 ARRAY['Black/Cognac','Midnight Blue'], 35, false),

-- Sandals
('Teva Hurricane XLT2', 'Adventure-ready sandals with quick-dry webbing.', 79.99, 'footwear', 'sandals', 
 ARRAY['/sandals-teva.jpg'], 
 ARRAY['8','9','10','11','12'], 
 ARRAY['Earth Tone','Black','Navy'], 70, true),

('Birkenstock Arizona', 'Contoured cork footbed with soft suede lining.', 99.99, 'footwear', 'sandals', 
 ARRAY['/sandals-birkenstock.jpg'], 
 ARRAY['8','9','10','11','12'], 
 ARRAY['Tobacco Brown','Black','Stone'], 65, false),

-- Casual
('Clarks Desert Trek', 'Moccasin-inspired casual shoes with crepe sole.', 139.99, 'footwear', 'casual', 
 ARRAY['/casual-clarks.jpg'], 
 ARRAY['8','9','10','11','12'], 
 ARRAY['Beeswax Leather','Dark Brown'], 50, true),

('Vans Old Skool', 'Classic skate shoes with signature side stripe.', 74.99, 'footwear', 'casual', 
 ARRAY['/casual-vans.jpg'], 
 ARRAY['7','8','9','10','11','12'], 
 ARRAY['Black/White','True White','Navy'], 120, false);
