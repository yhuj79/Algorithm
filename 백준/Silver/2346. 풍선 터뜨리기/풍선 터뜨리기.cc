/*
* 백준 2346번: 풍선 터뜨리기
* 원형 이중 연결 리스트로 구현하여 풀이함.
*/
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

typedef struct _linkednode
{
	int index; // 풍선의 번호.
	int value; // 풍선 안에 들어 있는 값.
	struct _linkednode* llink;
	struct _linkednode* rlink;

}linkednode;

typedef struct _head
{
	int size; // 해당 리스트의 사이즈. (풍선의 개수)
	linkednode* link;
}head;

/* 
* void InsertNode(head* header, int values): 빈 연결 리스트에 노드들을 삽입하는 함수이다.					  
* void DeleteNode(head* header)			   : 헤더가 이동하면서 삭제할 노드를 가리킨다.
*											 
*/

void InsertNode(head* header, int values);
void DeleteNode(head* header);

int main()
{
	head* header = (head*)malloc(sizeof(head)); // 연결 리스트의 헤더 생성
	header->link = NULL;
	header->size = 0;

	// 원형 이중 연결 리스트 사이즈의 사이즈를 입력받음.
	// 즉, 풍선의 개수.
	int size;
	scanf("%d", &size);

	// 사이즈만큼 value 배열을 만들어 풍선 안에 들어갈 숫자들을 입력받음.
	// 풍선들을 리스트 안에 삽입함.
	int* values = (int*)malloc(sizeof(int) * size);
	for (int i = 0; i < size; i++)
	{
		scanf("%d", values + i);
		InsertNode(header, values[i]);
	}

	for (int i = 0; i < size; i++)
	{
		DeleteNode(header);
	}
	
	// 마지막 하나 남은 노드를 free
	free(header->link);
	free(header);


	return 0;
}

void InsertNode(head* header, int values)
{
	// 리스트에 새로 추가될 노드
	linkednode* NewNode = (linkednode*)malloc(sizeof(linkednode));
	NewNode->value = values;
	NewNode->index = header->size + 1;

	// 리스트가 공백 리스트일 때
	if (header->link == NULL)
	{
		header->link = NewNode;
	}
	else
	{
		// 순회하면서 삽입 이전 위치 노드를 가리킬 노드 
		linkednode* CircuitNode = (linkednode*)malloc(sizeof(linkednode));
		CircuitNode = header->link;

		// CircuitNode가 이미 첫번째 노드를 가리키고 있으므로 
		// for문의 i를 1부터 시작한다.
		for(int i = 1; i < header->size; i++)
		{
			CircuitNode = CircuitNode->rlink;
		}

		CircuitNode->rlink = NewNode;
		NewNode->llink = CircuitNode;
		header->link->llink = NewNode;
		NewNode->rlink = header->link;
	}
	// 리스트에 원소를 삽입했으므로 사이즈를 증가시킨다.
	// 이것은 추후 삽입될 풍선의 인덱스가 된다.
	header->size++;
}

void DeleteNode(head* header)
{
	int index = header->link->index; // 풍선의 번호
	int value = header->link->value; // 풍선 안에 들어 있는 숫자의 값

	printf("%d ", index);

	// 풍선이 하나 남아 있을 때
	if (header->size == 1)
	{
		header->size--;
		return;
	}
	// 삭제할 풍선을 가리키는 노드
	linkednode* RemoveNode = (linkednode*)malloc(sizeof(linkednode));
	RemoveNode = header->link; // 삭제할 풍선을 가리킴

	if (value > 0)
	{
		for (int i = 0; i < value; i++)
		{
			header->link = header->link->rlink;

			// 터트릴 풍선 위치에 다시 도착하면 그냥 다음으로 넘어간다.
			if (header->link == RemoveNode)
			{
				header->link = header->link->rlink;
			}
		}
	}
	else
	{
		for (int i = 0; i < value * (-1); i++)
		{
			header->link = header->link->llink;

			// 터트릴 풍선 위치에 다시 도착하면 그냥 다음으로 넘어간다.
			if (header->link == RemoveNode)
			{
				header->link = header->link->llink;
			}
		}
	}
	RemoveNode->llink->rlink = RemoveNode->rlink;
	RemoveNode->rlink->llink = RemoveNode->llink;

	free(RemoveNode);
	header->size--;
}