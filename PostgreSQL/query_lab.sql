-- 1
SELECT S.sname, S.age FROM Sailors S

-- 2
SELECT DISTINCT S.sname FROM Sailors S, Reserves R, Boats B
WHERE B.bid = R.bid AND R.sid = S.sid

--3
SELECT DISTINCT S.sid FROM Sailors S, Reserves R, Boats B
WHERE B.bid = R.bid AND R.sid = S.sid AND B.color = 'Red'

--4
SELECT DISTINCT S.sname FROM Sailors S, Reserves R, Boats B
WHERE B.bid = R.bid AND R.sid = S.sid AND B.color = 'Red'

--5
SELECT DISTINCT B.color FROM Sailors S, Reserves R, Boats B
WHERE B.bid = R.bid AND R.sid = S.sid AND S.sname = 'Lubber'

--6
SELECT S.sname FROM Sailors S, Reserves R, Boats B
WHERE B.bid = R.bid AND R.sid = S.sid