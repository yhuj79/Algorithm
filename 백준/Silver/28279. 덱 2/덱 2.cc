#ifndef _CRT_SECURE_NO_WARNINGS
#define _CRT_SECURE_NO_WARNINGS
#endif
/*
28279_덱 2
24552KB	252ms
*/
#include <cstdio>

const int LM = 1000002;

struct _node {
	int v;
	_node* prev;
	_node* next;
} NODE[LM];

int idx, size;
int n, o, x;
_node* head, * tail, * node;

int main() {
#ifdef _WIN32
	freopen("input.txt", "r", stdin);
#endif // _WIN32
	head = &NODE[idx++];
	tail = &NODE[idx++];
	head->next = tail;
	tail->prev = head;

	scanf("%d", &n);
	while (n--) {
		scanf("%d", &o);
		switch (o) {
		case 1:
			scanf("%d", &x);
			node = &NODE[idx++];
			node->v = x;
			node->next = head->next;
			node->prev = head;
			node->next->prev = node;
			head->next = node;
			++size;
			break;
		case 2:
			scanf("%d", &x);
			node = &NODE[idx++];
			node->v = x;
			node->next = tail;
			node->prev = tail->prev;
			tail->prev->next = node;
			tail->prev = node;
			++size;
			break;
		case 3:
			if (size == 0) printf("-1\n");
			else {
				printf("%d\n", head->next->v);
				head->next->next->prev = head;
				head->next = head->next->next;
				--size;
			}
			break;
		case 4:
			if (size == 0) printf("-1\n");
			else {
				printf("%d\n", tail->prev->v);
				tail->prev->prev->next = tail;
				tail->prev = tail->prev->prev;
				--size;
			}
			break;
		case 5:
			printf("%d\n", size);
			break;
		case 6:
			printf("%d\n", size == 0);
			break;
		case 7:
			if (size == 0) printf("-1\n");
			else printf("%d\n", head->next->v);
			break;
		case 8:
			if (size == 0) printf("-1\n");
			else printf("%d\n", tail->prev->v);
			break;
		}
	}
	return 0;
}