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

('Puma RS-X Reinvention', 'Chunky sneakers with retro-futuristic design and cushioned midsole.', 129.99, 'footwear', 'sneakers',
 ARRAY['/sneakers-puma-rsx.jpg'],
 ARRAY['7.5','8.5','9.5','10.5','11.5'],
 ARRAY['Puma White/Black','True Blue/Poison Green'], 75, false),

('Converse Chuck 70 Vintage', 'Premium canvas sneakers with enhanced cushioning and durability.', 89.99, 'footwear', 'sneakers',
 ARRAY['/sneakers-converse-chuck70.jpg'],
 ARRAY['7','8','9','10','11','12'],
 ARRAY['Optical White','Black','Natural'], 100, true),

('Reebok Club C 85 Vintage', 'Classic tennis-inspired sneakers with heritage styling.', 84.99, 'footwear', 'sneakers',
 ARRAY['/sneakers-reebok-clubc.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Chalk/White','Legacy Ink'], 65, false),

-- Running
('New Balance FuelCell Rebel v4', 'Lightweight racing shoes with energy-return FuelCell midsole.', 159.99, 'footwear', 'running',
 ARRAY['/running-newbalance.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Electric Lime','Blackout','Deep Ocean'], 45, true),

('Asics Gel-Kayano 30', 'Stability running shoes with FF BLAST™ PLUS cushioning.', 159.99, 'footwear', 'running',
 ARRAY['/running-asics.jpg'],
 ARRAY['8','9','10','11','12','13'],
 ARRAY['Black/Silver','Ocean Blue/White'], 55, false),

('Brooks Ghost 15', 'Balanced neutral runners with DNA LOFT cushioning.', 139.99, 'footwear', 'running',
 ARRAY['/running-brooks-ghost.jpg'],
 ARRAY['8','9','10','11','12','13'],
 ARRAY['Black/Ebony','White/Silver'], 70, true),

('Hoka Clifton 9', 'Plush daily trainers with extended heel geometry.', 149.99, 'footwear', 'running',
 ARRAY['/running-hoka-clifton.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Vanilla/Butternut','Black/Anthracite'], 50, false),

('Nike Pegasus 40 Shield', 'Weather-resistant running shoes with React foam.', 129.99, 'footwear', 'running',
 ARRAY['/running-nike-pegasus.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Black/Volt','Thunder Grey'], 60, true),

-- Boots
('Timberland 6-Inch Premium', 'Waterproof leather boots perfect for outdoor adventures.', 199.99, 'footwear', 'boots',
 ARRAY['/boots-timberland.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Wheat Nubuck','Black','Dark Brown'], 50, true),

('Red Wing Iron Ranger', 'Heritage-grade leather boots with Goodyear welt construction.', 349.99, 'footwear', 'boots',
 ARRAY['/boots-redwing.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Amber Harness','Copper Rough & Tough'], 30, true),

('Dr. Martens 1460', 'Iconic 8-eye lace-up boots with air-cushioned sole.', 159.99, 'footwear', 'boots',
 ARRAY['/boots-drmartens.jpg'],
 ARRAY['7','8','9','10','11'],
 ARRAY['Smooth Black','Cherry Red'], 45, true),

('Blundstone BL-550', 'Chelsea-style work boots with slip-resistant sole.', 219.99, 'footwear', 'boots',
 ARRAY['/boots-blundstone.jpg'],
 ARRAY['8','9','10','11'],
 ARRAY['Rustic Brown','Black'], 35, false),

('Chippewa Apache Logger', 'Steel-toe work boots with Vibram outsole.', 249.99, 'footwear', 'boots',
 ARRAY['/boots-chippewa.jpg'],
 ARRAY['8.5','9.5','10.5','11.5'],
 ARRAY['Crazy Horse','Black'], 25, true),

-- Formal
('Johnston & Murphy Melton Oxford', 'Premium leather dress shoes with cushioned insole.', 229.99, 'footwear', 'formal',
 ARRAY['/formal-oxford.jpg'],
 ARRAY['8','8.5','9','9.5','10','10.5','11'],
 ARRAY['Black','Dark Brown','Burgundy'], 25, true),

('Cole Haan Grandpro Spectator', 'Modern wingtips with lightweight Grand.ØS technology.', 179.99, 'footwear', 'formal',
 ARRAY['/formal-colehaan.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Black/Cognac','Midnight Blue'], 35, false),

('Allen Edmonds Park Avenue', 'Timeless cap-toe oxfords with polished leather finish.', 395.00, 'footwear', 'formal',
 ARRAY['/formal-allen-edmonds.jpg'],
 ARRAY['8D','9D','10D','11D','8E','9E'],
 ARRAY['Black','Dark Chili'], 20, true),

('Florsheim Lexington', 'Double monk strap dress shoes with cushioned insoles.', 189.99, 'footwear', 'formal',
 ARRAY['/formal-florsheim.jpg'],
 ARRAY['8.5','9.5','10.5','11.5'],
 ARRAY['Burgundy','Dark Brown'], 30, false),

('Meermin Cap Toe', 'Goodyear-welted dress shoes with leather lining.', 295.00, 'footwear', 'formal',
 ARRAY['/formal-meermin.jpg'],
 ARRAY['8UK','9UK','10UK'],
 ARRAY['Black Calf','Dark Brown Calf'], 15, true),

-- Sandals
('Teva Hurricane XLT2', 'Adventure-ready sandals with quick-dry webbing.', 79.99, 'footwear', 'sandals',
 ARRAY['/sandals-teva.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Earth Tone','Black','Navy'], 70, true),

('Birkenstock Arizona', 'Contoured cork footbed with soft suede lining.', 99.99, 'footwear', 'sandals',
 ARRAY['/sandals-birkenstock.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Tobacco Brown','Black','Stone'], 65, false),

('Chaco Z/1 Classic', 'Adjustable outdoor sandals with LUVSEAT™ PU midsole.', 99.95, 'footwear', 'sandals',
 ARRAY['/sandals-chaco.jpg'],
 ARRAY['8','9','10','11'],
 ARRAY['Black','Burnt Olive'], 55, true),

('KEEN Newport H2', 'Water-friendly sandals with toe protection.', 114.99, 'footwear', 'sandals',
 ARRAY['/sandals-keen.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Brindle','Deep Ocean'], 60, false),

('Olukai Ohana', 'Comfort sandals with anatomical footbed and water-ready materials.', 124.99, 'footwear', 'sandals',
 ARRAY['/sandals-olukai.jpg'],
 ARRAY['8','9','10','11'],
 ARRAY['Black','Toasted Coconut'], 45, true),

-- Casual
('Clarks Desert Trek', 'Moccasin-inspired casual shoes with crepe sole.', 139.99, 'footwear', 'casual',
 ARRAY['/casual-clarks.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Beeswax Leather','Dark Brown'], 50, true),

('Vans Old Skool', 'Classic skate shoes with signature side stripe.', 74.99, 'footwear', 'casual',
 ARRAY['/casual-vans.jpg'],
 ARRAY['7','8','9','10','11','12'],
 ARRAY['Black/White','True White','Navy'], 120, false),

('Sperry Gold Cup', 'Boat shoes with premium leather and non-marking soles.', 159.99, 'footwear', 'casual',
 ARRAY['/casual-sperry.jpg'],
 ARRAY['8','9','10','11'],
 ARRAY['Sahara','Brown'], 65, true),

('ECCO Soft 7', 'Comfortable slip-ons with anatomical shape and cushioning.', 159.99, 'footwear', 'casual',
 ARRAY['/casual-ecco.jpg'],
 ARRAY['8','9','10','11','12'],
 ARRAY['Black','Cognac'], 75, false),

('Toms Alpargata', 'Canvas slip-ons with signature stripe detail.', 54.99, 'footwear', 'casual',
 ARRAY['/casual-toms.jpg'],
 ARRAY['7','8','9','10','11'],
 ARRAY['Natural','Black','Navy Stripe'], 90, true);