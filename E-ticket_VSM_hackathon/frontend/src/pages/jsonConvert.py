import pandas as pd
import io
import json
import os  

# Load the data into a DataFrame
data = """
Date,No. of Visitors,Special Day,Weekday Name
1/1/2021,800,New Year's Day,Friday
1/2/2021,700,None,Saturday
1/3/2021,900,None,Sunday
1/4/2021,400,None,Monday
1/5/2021,300,None,Tuesday
1/6/2021,600,None,Wednesday
1/7/2021,500,None,Thursday
1/8/2021,850,None,Friday
1/9/2021,750,None,Saturday
1/10/2021,950,None,Sunday
1/11/2021,420,None,Monday
1/12/2021,320,None,Tuesday
1/13/2021,620,Lohri,Wednesday
1/14/2021,520,Makar Sankranti,Thursday
1/15/2021,880,Pongal,Friday
1/16/2021,780,None,Saturday
1/17/2021,960,None,Sunday
1/18/2021,430,None,Monday
1/19/2021,330,None,Tuesday
1/20/2021,630,Guru Gobind Singh Jayanti,Wednesday
1/21/2021,530,None,Thursday
1/22/2021,890,None,Friday
1/23/2021,790,Netaji Subhas Chandra Bose Jayanti,Saturday
1/24/2021,970,None,Sunday
1/25/2021,440,None,Monday
1/26/2021,340,Republic Day,Tuesday
1/27/2021,640,None,Wednesday
1/28/2021,540,None,Thursday
1/29/2021,900,None,Friday
1/30/2021,800,None,Saturday
1/31/2021,980,None,Sunday
2/1/2021,420,None,Monday
2/2/2021,200,None,Tuesday
2/3/2021,600,None,Wednesday
2/4/2021,500,None,Thursday
2/5/2021,850,None,Friday
2/6/2021,750,None,Saturday
2/7/2021,950,None,Sunday
2/8/2021,430,None,Monday
2/9/2021,210,None,Tuesday
2/10/2021,620,None,Wednesday
2/11/2021,520,None,Thursday
2/12/2021,880,None,Friday
2/13/2021,780,None,Saturday
2/14/2021,960,Valentine's Day,Sunday
2/15/2021,440,None,Monday
2/16/2021,220,None,Tuesday
2/17/2021,630,None,Wednesday
2/18/2021,530,None,Thursday
2/19/2021,890,None,Friday
2/20/2021,790,None,Saturday
2/21/2021,970,None,Sunday
2/22/2021,450,None,Monday
2/23/2021,230,None,Tuesday
2/24/2021,640,None,Wednesday
2/25/2021,540,None,Thursday
2/26/2021,900,None,Friday
2/27/2021,800,None,Saturday
2/28/2021,980,None,Sunday
3/1/2021,430,None,Monday
3/2/2021,220,None,Tuesday
3/3/2021,600,None,Wednesday
3/4/2021,500,None,Thursday
3/5/2021,850,None,Friday
3/6/2021,750,None,Saturday
3/7/2021,950,None,Sunday
3/8/2021,440,None,Monday
3/9/2021,230,None,Tuesday
3/10/2021,620,None,Wednesday
3/11/2021,520,Maha Shivaratri,Thursday
3/12/2021,880,None,Friday
3/13/2021,780,None,Saturday
3/14/2021,960,None,Sunday
3/15/2021,450,None,Monday
3/16/2021,240,None,Tuesday
3/17/2021,630,None,Wednesday
3/18/2021,530,None,Thursday
3/19/2021,890,None,Friday
3/20/2021,790,None,Saturday
3/21/2021,970,None,Sunday
3/22/2021,460,None,Monday
3/23/2021,250,Martyrs' Day,Tuesday
3/24/2021,640,None,Wednesday
3/25/2021,540,None,Thursday
3/26/2021,900,None,Friday
3/27/2021,800,None,Saturday
3/28/2021,980,Holika Dahan,Sunday
3/29/2021,480,Holi,Monday
3/30/2021,260,None,Tuesday
3/31/2021,650,None,Wednesday
4/1/2021,550,None,Thursday
4/2/2021,900,Good Friday,Friday
4/3/2021,800,None,Saturday
4/4/2021,980,Easter Sunday,Sunday
4/5/2021,470,None,Monday
4/6/2021,250,None,Tuesday
4/7/2021,660,None,Wednesday
4/8/2021,560,None,Thursday
4/9/2021,910,None,Friday
4/10/2021,810,None,Saturday
4/11/2021,990,None,Sunday
4/12/2021,480,None,Monday
4/13/2021,270,Ugadi,Tuesday
4/14/2021,670,Dr. B.R. Ambedkar Jayanti,Wednesday
4/15/2021,570,None,Thursday
4/16/2021,920,None,Friday
4/17/2021,820,None,Saturday
4/18/2021,1000,None,Sunday
4/19/2021,490,None,Monday
4/20/2021,280,None,Tuesday
4/21/2021,680,None,Wednesday
4/22/2021,580,None,Thursday
4/23/2021,930,None,Friday
4/24/2021,830,None,Saturday
4/25/2021,1010,None,Sunday
4/26/2021,500,None,Monday
4/27/2021,290,None,Tuesday
4/28/2021,690,None,Wednesday
4/29/2021,590,None,Thursday
4/30/2021,940,None,Friday
5/1/2021,800,Labour Day,Saturday
5/2/2021,990,None,Sunday
5/3/2021,470,None,Monday
5/4/2021,230,None,Tuesday
5/5/2021,650,None,Wednesday
5/6/2021,550,None,Thursday
5/7/2021,920,None,Friday
5/8/2021,820,None,Saturday
5/9/2021,1000,None,Sunday
5/10/2021,460,None,Monday
5/11/2021,220,None,Tuesday
5/12/2021,670,None,Wednesday
5/13/2021,570,Eid al-Fitr,Thursday
5/14/2021,930,None,Friday
5/15/2021,830,None,Saturday
5/16/2021,1010,None,Sunday
5/17/2021,480,None,Monday
5/18/2021,240,None,Tuesday
5/19/2021,680,None,Wednesday
5/20/2021,580,None,Thursday
5/21/2021,940,None,Friday
5/22/2021,840,None,Saturday
5/23/2021,1020,None,Sunday
5/24/2021,490,None,Monday
5/25/2021,250,Buddha Purnima,Tuesday
5/26/2021,690,None,Wednesday
5/27/2021,590,None,Thursday
5/28/2021,950,None,Friday
5/29/2021,850,None,Saturday
5/30/2021,1030,None,Sunday
5/31/2021,500,None,Monday
6/1/2021,210,None,Tuesday
6/2/2021,700,None,Wednesday
6/3/2021,600,None,Thursday
6/4/2021,950,None,Friday
6/5/2021,850,None,Saturday
6/6/2021,1030,None,Sunday
6/7/2021,500,None,Monday
6/8/2021,220,None,Tuesday
6/9/2021,710,None,Wednesday
6/10/2021,610,None,Thursday
6/11/2021,960,None,Friday
6/12/2021,860,None,Saturday
6/13/2021,1040,None,Sunday
6/14/2021,510,None,Monday
6/15/2021,230,None,Tuesday
6/16/2021,720,None,Wednesday
6/17/2021,620,None,Thursday
6/18/2021,970,None,Friday
6/19/2021,870,None,Saturday
6/20/2021,1050,None,Sunday
6/21/2021,520,None,Monday
6/22/2021,240,None,Tuesday
6/23/2021,730,None,Wednesday
6/24/2021,630,None,Thursday
6/25/2021,980,None,Friday
6/26/2021,880,None,Saturday
6/27/2021,1060,None,Sunday
6/28/2021,530,None,Monday
6/29/2021,250,None,Tuesday
6/30/2021,740,None,Wednesday
7/1/2021,600,None,Thursday
7/2/2021,960,None,Friday
7/3/2021,860,None,Saturday
7/4/2021,1040,None,Sunday
7/5/2021,530,None,Monday
7/6/2021,250,None,Tuesday
7/7/2021,710,None,Wednesday
7/8/2021,610,None,Thursday
7/9/2021,970,None,Friday
7/10/2021,870,None,Saturday
7/11/2021,1050,None,Sunday
7/12/2021,540,None,Monday
7/13/2021,260,None,Tuesday
7/14/2021,720,None,Wednesday
7/15/2021,620,None,Thursday
7/16/2021,980,None,Friday
7/17/2021,880,None,Saturday
7/18/2021,1060,None,Sunday
7/19/2021,550,None,Monday
7/20/2021,270,Bakrid / Eid al-Adha,Tuesday
7/21/2021,730,None,Wednesday
7/22/2021,630,None,Thursday
7/23/2021,990,None,Friday
7/24/2021,890,None,Saturday
7/25/2021,1070,None,Sunday
7/26/2021,560,None,Monday
7/27/2021,280,None,Tuesday
7/28/2021,740,None,Wednesday
7/29/2021,640,None,Thursday
7/30/2021,1000,None,Friday
7/31/2021,900,None,Saturday
8/1/2021,1080,None,Sunday
8/2/2021,570,None,Monday
8/3/2021,290,None,Tuesday
8/4/2021,750,None,Wednesday
8/5/2021,650,None,Thursday
8/6/2021,1010,None,Friday
8/7/2021,910,None,Saturday
8/8/2021,1090,None,Sunday
8/9/2021,580,None,Monday
8/10/2021,300,None,Tuesday
8/11/2021,760,None,Wednesday
8/12/2021,660,None,Thursday
8/13/2021,1020,None,Friday
8/14/2021,920,None,Saturday
8/15/2021,1100,Independence Day,Sunday
8/16/2021,590,None,Monday
8/17/2021,310,None,Tuesday
8/18/2021,770,None,Wednesday
8/19/2021,670,Muharram,Thursday
8/20/2021,1030,None,Friday
8/21/2021,930,None,Saturday
8/22/2021,1110,Raksha Bandhan,Sunday
8/23/2021,600,None,Monday
8/24/2021,320,None,Tuesday
8/25/2021,780,None,Wednesday
8/26/2021,680,None,Thursday
8/27/2021,1040,None,Friday
8/28/2021,940,None,Saturday
8/29/2021,1120,Janmashtami,Sunday
8/30/2021,610,None,Monday
8/31/2021,330,None,Tuesday
9/1/2021,790,None,Wednesday
9/2/2021,690,None,Thursday
9/3/2021,1050,None,Friday
9/4/2021,950,None,Saturday
9/5/2021,1130,Teachers' Day,Sunday
9/6/2021,620,None,Monday
9/7/2021,340,None,Tuesday
9/8/2021,800,None,Wednesday
9/9/2021,700,None,Thursday
9/10/2021,1060,Ganesh Chaturthi,Friday
9/11/2021,960,None,Saturday
9/12/2021,1140,None,Sunday
9/13/2021,630,None,Monday
9/14/2021,350,None,Tuesday
9/15/2021,810,None,Wednesday
9/16/2021,710,None,Thursday
9/17/2021,1070,None,Friday
9/18/2021,970,None,Saturday
9/19/2021,1150,None,Sunday
9/20/2021,640,None,Monday
9/21/2021,360,None,Tuesday
9/22/2021,820,None,Wednesday
9/23/2021,720,None,Thursday
9/24/2021,1080,None,Friday
9/25/2021,980,None,Saturday
9/26/2021,1160,None,Sunday
9/27/2021,650,None,Monday
9/28/2021,370,None,Tuesday
9/29/2021,830,None,Wednesday
9/30/2021,730,None,Thursday
10/6/2021,840,None,Wednesday
10/7/2021,740,None,Thursday
10/8/2021,1100,None,Friday
10/9/2021,1000,None,Saturday
10/10/2021,1180,None,Sunday
10/11/2021,670,None,Monday
10/12/2021,390,None,Tuesday
10/13/2021,850,None,Wednesday
10/14/2021,750,Maha Navami,Thursday
10/15/2021,1110,Dussehra,Friday
10/16/2021,1010,None,Saturday
10/17/2021,1190,None,Sunday
10/18/2021,680,None,Monday
10/19/2021,400,Eid-e-Milad,Tuesday
10/20/2021,860,None,Wednesday
10/21/2021,760,None,Thursday
10/22/2021,1120,None,Friday
10/23/2021,1020,None,Saturday
10/24/2021,1200,None,Sunday
10/25/2021,690,None,Monday
10/26/2021,410,None,Tuesday
10/27/2021,870,None,Wednesday
10/28/2021,770,None,Thursday
10/29/2021,1130,None,Friday
10/30/2021,1030,None,Saturday
10/31/2021,1210,None,Sunday
11/1/2021,700,None,Monday
11/2/2021,420,None,Tuesday
11/3/2021,880,None,Wednesday
11/4/2021,780,Diwali,Thursday
11/5/2021,1140,None,Friday
11/6/2021,1040,None,Saturday
11/7/2021,1220,None,Sunday
11/8/2021,710,None,Monday
11/9/2021,430,None,Tuesday
11/10/2021,890,None,Wednesday
11/11/2021,790,None,Thursday
11/12/2021,1150,None,Friday
11/13/2021,1050,None,Saturday
11/14/2021,1230,Children's Day,Sunday
11/15/2021,720,None,Monday
11/16/2021,440,None,Tuesday
11/17/2021,900,None,Wednesday
11/18/2021,800,Guru Nanak Jayanti,Thursday
11/19/2021,1160,None,Friday
11/20/2021,1060,None,Saturday
11/21/2021,1240,None,Sunday
11/22/2021,730,None,Monday
11/23/2021,450,None,Tuesday
11/24/2021,910,None,Wednesday
11/25/2021,810,None,Thursday
11/26/2021,1170,None,Friday
11/27/2021,1070,None,Saturday
11/28/2021,1250,None,Sunday
11/29/2021,740,None,Monday
11/30/2021,460,None,Tuesday
12/1/2021,920,None,Wednesday
12/2/2021,820,None,Thursday
12/3/2021,1180,None,Friday
12/4/2021,1080,None,Saturday
12/5/2021,1260,None,Sunday
12/6/2021,750,None,Monday
12/7/2021,470,None,Tuesday
12/8/2021,930,None,Wednesday
12/9/2021,830,None,Thursday
12/10/2021,1190,None,Friday
12/11/2021,1090,None,Saturday
12/12/2021,1270,None,Sunday
12/13/2021,760,None,Monday
12/14/2021,480,None,Tuesday
12/15/2021,940,None,Wednesday
12/16/2021,840,None,Thursday
12/17/2021,1200,None,Friday
12/18/2021,1100,None,Saturday
12/19/2021,1280,None,Sunday
12/20/2021,770,None,Monday
12/21/2021,490,None,Tuesday
12/22/2021,950,None,Wednesday
12/23/2021,850,None,Thursday
12/24/2021,1210,Christmas Eve,Friday
12/25/2021,1110,Christmas Day,Saturday
12/26/2021,1290,None,Sunday
12/27/2021,780,None,Monday
12/28/2021,500,None,Tuesday
12/29/2021,960,None,Wednesday
12/30/2021,860,None,Thursday
12/31/2021,1220,New Year's Eve,Friday

"""

# Create a DataFrame
df = pd.read_csv(io.StringIO(data))

# Convert to JSON
json_data = df.to_json(orient="records")

# Load JSON string into a Python object
json_object = json.loads(json_data)

# Check the current working directory
print("Current working directory:", os.getcwd())

# Write the JSON object to a file named 'visitorData.json'
try:
    with open("visitorData.json", "w") as json_file:
        json.dump(json_object, json_file, indent=4)
    print("visitorData.json file has been created successfully.")
except Exception as e:
    print("Error creating the file:", e)