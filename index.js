const navToggle = document.getElementById('nav-toggle').addEventListener("click",temp);



function temp()
{
    document.body.classList.toggle('nav-open');
}

var _SectionSubtitleIntro =
[
    "CS Student",
    "Coffee connoisseur",
    "C# Enjoyer"
]

//cursor start
var _PART = 0;

//Index
var _Part_Index = 0;

//Holds the handle returned from setInterval
var _Interval_val;

//Element that holds the text
var _Element = document.querySelector('#section__subtitle--intro');


//Implement typing effect
function Type()
{
    var text = _SectionSubtitleIntro[_PART].substring(0,_Part_Index + 1);
    _Element.innerHTML = text;
    _Part_Index++;

    //If full sentence
    if(text.length >= _SectionSubtitleIntro[_PART].length)
    {
        clearInterval(_Interval_val);
        setTimeout(function()
        {
            _Part_Index = _SectionSubtitleIntro[_PART].length-1;
            _Interval_val = setInterval(Delete, 50);
        }, 1000);
    }
}


//Implement deleting effect
function Delete()
{
    var text = _SectionSubtitleIntro[_PART].substring(0, _Part_Index - 1);
    _Element.innerHTML = text;
    _Part_Index--;

    if(text.length <= 1)
    {
        //add temporary space

        clearInterval(_Interval_val);

        if(_PART == (_SectionSubtitleIntro.length - 1))
        {
            _PART = 0;
        }
        else
        {
            _PART++;
        }

        _Part_Index = 0;

        //start to display the next sentence
        setTimeout(function()
        {
            _Interval_val = setInterval(Type, 100);
        },20)
    }
}

//Start the typing effect on load
_Interval_val = setInterval(Type, 100);


