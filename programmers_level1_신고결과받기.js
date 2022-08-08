/**
 * [PROGRAMMERS] 신고 결과 받기
 * 
 */

function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    
    const reportedList = {};
    const suspendedList = [];
    
    // 중복 제거
    report = [...new Set(report)];
    
    // k번 이상 신고된 유저 찾기
    let reportList = report.map(item => item.split(' ').pop());  
	reportList.forEach(reported => { 
        reportedList[reported] = (reportedList[reported] || 0) + 1; 
        if(reportedList[reported] >= k) {
      	    suspendedList.push(reported);
        }
	});
    
    // 처리 결과 메일 카운트
   	report.forEach(item => {
        const reportItem = item.split(' ');
        if(suspendedList.indexOf(reportItem[1]) > -1) {
      	    const findReportIndex = id_list.indexOf(reportItem[0]);
            answer[findReportIndex]++;
        }
    });
    
    return answer;
}